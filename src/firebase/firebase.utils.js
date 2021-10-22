import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAc5jxpHLrAd4rY9P28i0Ry9zfM3_9MbKc",
    authDomain: "shop-db-f3b21.firebaseapp.com",
    projectId: "shop-db-f3b21",
    storageBucket: "shop-db-f3b21.appspot.com",
    messagingSenderId: "912991541796",
    appId: "1:912991541796:web:016683660450a1d15d56b1",
    measurementId: "G-W0E4M0E55D"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoggle = () => auth.signInWithPopup(provider);

export default firebase;