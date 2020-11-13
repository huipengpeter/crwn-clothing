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

export const createUserProfileDocument = async (userAuth, additionalData) => {
        if(!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`);

        const snapShot = await userRef.get();

        if(!snapShot.exists){
                const { displayName, email } = userAuth;
                const createdAt = new Date();

                try{
                        await userRef.set({
                                displayName,
                                email,
                                createdAt,
                                ...additionalData
                        })
                }catch(error){
                        console.log('error creating user', error.message);
                }
        }
        return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;