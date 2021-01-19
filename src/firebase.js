import firebase from 'firebase/app'; 
import 'firebase/firestore'; 
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCj7KESMtfjRkIFvfbWQbycIWGp0oSInOk",
    authDomain: "pizza-planet-530f8.firebaseapp.com",
    projectId: "pizza-planet-530f8",
    storageBucket: "pizza-planet-530f8.appspot.com",
    messagingSenderId: "549310575274",
    appId: "1:549310575274:web:2ec97e9e7566409f3f96d3"
}

firebase.initializeApp(config); 
const db = firebase.firestore();

export const firebaseAuth = firebase.auth();
export const dbMenuRef = db.collection('menu');