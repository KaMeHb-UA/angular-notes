import * as firebase from 'firebase'

declare const firestore: ReturnType<typeof firebase['firestore']>

export default firestore

export const auth: ReturnType<typeof firebase['auth']>
