import { Observable } from 'rxjs'

export function set(table: string, name: string, data: any, silent?: boolean): Promise<void>

export function get(table: string, name: string): Promise<any>

export function remove(table: string, name: string, silent?: boolean): Promise<void>

export function runPendingEvents(): void

export function listTables(): Promise<string[]>

export function listNames(table: string): Promise<string[]>

export default function getData(table: string, name: string): Observable<any>
