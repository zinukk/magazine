import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBx3-qqP7QCPiV1E7_XF6RnrbhLNXh-wDU",
    authDomain: "image-community-600ae.firebaseapp.com",
    projectId: "image-community-600ae",
    storageBucket: "image-community-600ae.appspot.com",
    messagingSenderId: "697133936976",
    appId: "1:697133936976:web:c5b24359712882d66a3c55",
    measurementId: "G-DGK44QQ2WC"
}

firebase.initializeApp(firebaseConfig)

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth()
const firestore = firebase.firestore()

export {auth, apiKey, firestore}