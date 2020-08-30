import { EventEmitter } from 'events'

const ee = new EventEmitter;
const pendingEvents = Object.create(null);
const cache = Object.create(null);

function flat(table, name){
    return JSON.stringify([table, name]);
}

/** @type {typeof import('./indexedDB.internal').request} */
const request = (obj, name, ...args) => {
    let req;
    const res = new Promise((resolve, reject) => {
        const request = obj[name](...args);
        req = request;
        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result)
    });
    res.request = req;
    return res
}

async function openDB(){
    const dbr = request(indexedDB, 'open', 'data', 1);
    dbr.request.onupgradeneeded = () => {
        const db = dbr.request.result;
        console.log('Upgradeneeded:', db.version, db);
        switch(db.version){
            case 0:
            case 1:
                db.createObjectStore('general');
                db.createObjectStore('notes');
        }
    }
    return dbr
}

export async function get(storeName, name){
    if(!(name in cache)){
        const db = await openDB();
        const tx = db.transaction(storeName, 'readonly');
        const store = tx.objectStore(storeName);
        cache[name] = await request(store, 'get', name)
    }
    return cache[name]
}

export async function set(storeName, name, value, silent){
    const db = await openDB();
    const tx = db.transaction(storeName, 'readwrite');
    const store = tx.objectStore(storeName);
    await request(store, 'put', value, name);
    cache[name] = value;
    if(silent) pendingEvents[name] = [value, 'update'];
    else ee.emit(flat(storeName, name), value, 'update')
}

export async function remove(storeName, name, silent){
    const db = await openDB();
    const tx = db.transaction(storeName, 'readwrite');
    const store = tx.objectStore(storeName);
    await request(store, 'delete', name);
    delete cache[name];
    if(silent) pendingEvents[name] = [void 0, 'remove'];
    else ee.emit(flat(storeName, name), void 0, 'remove')
}

export function onChange(table, name, callback){
    ee.on(flat(table, name), callback)
}

export function offChange(table, name, callback){
    ee.off(flat(table, name), callback)
}

export function clearCache(){
    for(const i in cache) delete cache[i]
}

export function runPendingEvents(){
    for(const name in pendingEvents){
        const args = pendingEvents[name];
        delete pendingEvents[name];
        ee.emit(name, ...args)
    }
}
