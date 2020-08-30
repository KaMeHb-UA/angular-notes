import { Observable } from 'rxjs'
import * as provider from './providers/localStorage'

export default function(table, name){
    return new Observable(observer => {
        provider.get(table, name).then(v => observer.next(v));
        const handler = count => observer.next(count);
        provider.onChange(table, name, handler);
        return () => provider.offChange(table, name, handler)
    })
}

export const { get, set, remove, runPendingEvents } = provider
