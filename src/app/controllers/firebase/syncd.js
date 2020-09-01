import flat from '../../etc/flat'
import firestore, { auth } from './firestore'
import * as localDB from '../db'
import setIntervalImmediate from '../../etc/setIntervalImmediate'
import ResolveablePromise from '../../etc/resolveablePromise'
import './ui'

let uid;

function set(table, name, value){
    return firestore.collection(uid).doc(flat(table, name)).set(JSON.parse(JSON.stringify({value})))
}

function remove(table, name){
    return firestore.collection(uid).doc(flat(table, name)).delete()
}

async function populateLocalDB(){
    const tables = await localDB.listTables();
    const names = await Promise.all(tables.map(table => localDB.listNames(table).then(names => names.map(name => [ table, name ]))));
    const values = await Promise.all(names.shift().concat(...names).map(([ table, name ]) => localDB.get(table, name).then(v => [ table, name, v ])));
    const db = {};
    for(const [ table, name, value ] of values) db[flat(table, name)] = value;
    return db
}

function arrayChanges(base, next){
    const deleted = base.filter(v => !next.includes(v));
    return {
        deleted,
        added: next.filter(v => !base.includes(v)),
        flat: base.filter(v => !deleted.includes(v)),
    }
}

const lastLocalSnapshot = {};
const firstLocalSnapshot = new ResolveablePromise;

function onLocalSnapshot(snapshot){
    const { deleted, added, flat } = arrayChanges(Object.keys(lastLocalSnapshot), Object.keys(snapshot));
    for(const tablename of deleted){
        const [ table, name ] = JSON.parse(tablename);
        delete lastLocalSnapshot[tablename];
        remove(table, name)
    }
    for(const tablename of added){
        const [ table, name ] = JSON.parse(tablename);
        lastLocalSnapshot[tablename] = snapshot[tablename];
        set(table, name, snapshot[tablename])
    }
    for(const tablename of flat){
        if(JSON.stringify(lastLocalSnapshot[tablename]) !== JSON.stringify(snapshot[tablename])){
            const [ table, name ] = JSON.parse(tablename);
            lastLocalSnapshot[tablename] = snapshot[tablename];
            set(table, name, snapshot[tablename])
        }
    }
}

async function onSnapshot(snapshot){
    await firstLocalSnapshot;
    const { deleted, added, flat } = arrayChanges(Object.keys(lastLocalSnapshot), Object.keys(snapshot));
    for(const tablename of deleted){
        const [ table, name ] = JSON.parse(tablename);
        delete lastLocalSnapshot[tablename];
        localDB.remove(table, name);
    }
    for(const tablename of added){
        const [ table, name ] = JSON.parse(tablename);
        lastLocalSnapshot[tablename] = snapshot[tablename];
        localDB.set(table, name, snapshot[tablename])
    }
    for(const tablename of flat){
        if(JSON.stringify(lastLocalSnapshot[tablename]) !== JSON.stringify(snapshot[tablename])){
            const [ table, name ] = JSON.parse(tablename);
            lastLocalSnapshot[tablename] = snapshot[tablename];
            localDB.set(table, name, snapshot[tablename])
        }
    }
}

let unsubscribe, intervalHandler;

auth.onAuthStateChanged(user => {
    if(user){
        uid = user.uid;
        unsubscribe = firestore.collection(uid).onSnapshot(snapshot => {
            const objSnap = {};
            snapshot.docs.map(doc => {
                const data = doc.data();
                objSnap[doc.id] = data && data.value || data
            });
            onSnapshot(objSnap)
        }, err => alert(err.message));
        intervalHandler = setIntervalImmediate(async () => {
            const db = await populateLocalDB();
            firstLocalSnapshot.resolve();
            onLocalSnapshot(db)
        }, 1000);
    } else {
        uid = undefined;
        unsubscribe();
        clearInterval(intervalHandler)
    }
})
