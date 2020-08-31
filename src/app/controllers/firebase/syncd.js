import firestore from './firestore'
import flat from '../../etc/flat'
import { auth } from './firestore'
import './ui'

const notSynced = Object.create(null);
let uid;

function unwrapVal(val){
    const { value } = val.data() || {};
    return value
}

function setOffline(table, name, value){
    notSynced[flat(table, name)] = value
}

function set(table, name, value){
    return firestore.collection(uid).doc(flat(table, name)).set(JSON.parse(JSON.stringify({value})))
}

function get(table, name){
    return firestore.collection(uid).doc(flat(table, name)).get().then(unwrapVal)
}

function onChange(table, name){
    firestore.collection(uid).doc(flat(table, name)).onSnapshot(snapshot => {
        //snapshot
    }, e => alert(e.message))
}

let lastIntervalHandler;

auth.onAuthStateChanged(user => {
    if(user){
        uid = user.uid
        lastIntervalHandler = setInterval(() => {
            //
        }, 1000)
    } else {
        clearInterval(lastIntervalHandler);
        uid = undefined
    }
})
