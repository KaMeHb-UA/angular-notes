export default class _Promise{
    constructor(callback){
        let _, $;
        const promise = new Promise((resolve, reject) => {
            _ = resolve;
            $ = reject;
            if(callback) callback(resolve, reject)
        });
        promise.resolve = _;
        promise.reject = $;
        return promise
    }
}
