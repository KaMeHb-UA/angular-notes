import { EventEmitter } from 'events'
import flat from '../../../etc/flat'

const ee = new EventEmitter;
const cache = Object.create(null);

export async function get(table, name){
    name = flat(table, name);
    if(!(name in cache)){
        const raw = localStorage.getItem(name);
        try{
            cache[name] = JSON.parse(raw)
        } catch(e){
            cache[name] = undefined
        }
    }
    return cache[name]
}

const pendingEvents = Object.create(null);

export async function set(table, name, value, silent){
    name = flat(table, name);
    value = JSON.parse(JSON.stringify(value));
    localStorage.setItem(name, JSON.stringify(value));
    cache[name] = value;
    if(silent) pendingEvents[name] = [value, 'update'];
    else ee.emit(name, value, 'update')
}

export function remove(table, name, silent){
    name = flat(table, name);
    localStorage.removeItem(name);
    delete cache[name];
    if(silent) pendingEvents[name] = [void 0, 'remove'];
    else ee.emit(name, void 0, 'remove')
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

export async function listTables(){
    const tables = new Set;
    Object.keys(localStorage).forEach(v => {
        try{ tables.add(JSON.parse(v)[0]); } catch(e){}
    });
    return [...tables]
}

export async function listNames(table){
    const names = new Set;
    const start = '[' + JSON.stringify(table) + ',"';
    Object.keys(localStorage).filter(v => v.startsWith(start)).forEach(v => {
        try{ names.add(JSON.parse(v)[0]); } catch(e){}
    });
    return [...names]
}
