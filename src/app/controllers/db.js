const cache = Object.create(null);
const handlers = Object.create(null);

export function get(name){
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

export function set(name, value){
    value = JSON.parse(JSON.stringify(value));
    localStorage.setItem(name, JSON.stringify(value));
    cache[name] = value;
    for(const handler of handlers['u:' + name] || []) handler(value, 'update')
}

export function remove(name){
    localStorage.removeItem(name);
    for(const handler of handlers['d:' + name] || []) handler(void 0, 'remove')
}

function addHandler(name, handler){
    if(!handlers[name]) handlers[name] = [];
    handlers[name].push(handler) - 1
}

function removeHandler(name, handler){
    if(!handlers[name]) handlers[name] = [];
    handlers[name] = (handlers[name] || []).filter(v => v !== handler)
}

export function onChange(name, callback){
    addHandler('u:' + name, callback);
    addHandler('d:' + name, callback)
}

export function offChange(name, callback){
    removeHandler('u:' + name, callback);
    removeHandler('d:' + name, callback)
}

export function clearCache(){
    for(const i in cache) delete cache[i]
}
