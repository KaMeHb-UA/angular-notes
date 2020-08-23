export function get(name: string): any

export function set(name: string, value: any): void

export function remove(name: string): void

type Callback = (data: any, type: 'update' | 'remove') => void

export function onChange(name: string, callback: Callback): void

export function offChange(name: string, callback: Callback): void

export function clearCache(): void
