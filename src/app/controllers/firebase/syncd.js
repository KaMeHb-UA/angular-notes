import firestore from './firestore'

function unwrapVal(val){
    const { value } = val.data() || {};
    return value
}

function set(table, name, value){
    return firestore.collection(table).doc(name).set(JSON.parse(JSON.stringify({value})))
}

function get(table, name){
    return firestore.collection(table).doc(name).get().then(unwrapVal)
}
