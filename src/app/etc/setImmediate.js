const ID = Math.random();
let head = {},
    tail = head;

function onmessage(e){
    if(e.data != ID) return;
    head = head.next;
    const func = head.func;
    delete head.func;
    func()
}

addEventListener('message', onmessage);

export default func => {
    tail = tail.next = { func };
    window.postMessage(ID, '*')
}
