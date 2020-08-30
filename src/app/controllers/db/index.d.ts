import { Observable } from 'rxjs'

export default function getData(table: string, name: string): Observable<any>

export function set(table: string, name: string, data: any): Promise<void>

export function get(table: string, name: string): Promise<any>

export function remove(table: string, name: string): Promise<void>
