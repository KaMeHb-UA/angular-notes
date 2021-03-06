import { Observable } from 'rxjs'
import * as provider from './providers/indexedDB'

export default function(table, name){
    return new Observable(observer => {
        provider.get(table, name).then(v => observer.next(v));
        const handler = v => observer.next(v);
        provider.onChange(table, name, handler);
        return () => provider.offChange(table, name, handler)
    })
}

export const { get, set, remove, runPendingEvents, listTables, listNames } = provider
