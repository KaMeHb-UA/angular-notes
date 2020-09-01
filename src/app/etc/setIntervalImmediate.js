import setImmediate from './setImmediate'

export default function setIntervalImmediate(callback, ...args){
    setImmediate(callback);
    return setInterval(callback, ...args)
}
