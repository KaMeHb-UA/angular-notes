export default class ResolveablePromise<T> extends Promise<T>{
    resolve(value: T): void
    reject(error: Error): void
}
