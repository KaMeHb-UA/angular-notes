type FunctionArgs<F> = F extends (...args: infer T) => any ? T :
                       F extends (...args: infer T) => void ? T : never

//@ts-ignore
export function request<T, P extends keyof T>(obj: T, method: P, ...args: FunctionArgs<typeof obj[P]>): Promise<ReturnType<typeof obj[P]>['result']>
