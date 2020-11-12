import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config={

        apiKey: "AIzaSyAqgRuTEu6ZhAXGw-CvHSiX4tcyq83uvvk",
        authDomain: "crwn-db-cce71.firebaseapp.com",
        databaseURL: "https://crwn-db-cce71.firebaseio.com",
        projectId: "crwn-db-cce71",
        storageBucket: "crwn-db-cce71.appspot.com",
        messagingSenderId: "860254158124",
        appId: "1:860254158124:web:0db9ee567ed91f46bb0089",
        measurementId: "G-WRJXDE70WN"

};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;