const uiConfig = {
    signInSuccessUrl: location.href,
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    // to change later
    tosUrl: location.href,
    privacyPolicyUrl: location.href
}
const ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start('#firebaseui-auth-container', uiConfig);
