import config from './config'

/** @type {{ firebase: typeof import('firebase') }} */
const { firebase } = Function('return this')();
const app = firebase.initializeApp(config);
try{
    // may be blocked by ab blockers
    firebase.analytics(app)
} catch(e){}

export default firebase.firestore(app)
