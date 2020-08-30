import { EventEmitter } from 'events'

const ee = new EventEmitter;
const cache = Object.create(null);

function flat(table, name){
    return JSON.stringify([table, name]);
}

export async function get(table, name){
    name = flat(table, name);
    if(!(name in cache)){
        const raw = localStorage.getItem(name);
        try{
            cache[name] = JSON.parse(raw)
        } catch(e){
            cache[name] = null
        }
    }
    return cache[name]
}

export async function set(table, name, value){
    name = flat(table, name);
    value = JSON.parse(JSON.stringify(value));
    localStorage.setItem(name, JSON.stringify(value));
    cache[name] = value;
    ee.emit(name, value, 'update')
}

export function remove(table, name){
    name = flat(table, name);
    localStorage.removeItem(name);
    delete cache[name];
    ee.emit(name, void 0, 'remove')
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
