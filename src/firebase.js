import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAQ1twIQj-27uR_1coqTYCRUwDhfL9fSNc",
    authDomain: "tweeter-543cc.firebaseapp.com",
    projectId: "tweeter-543cc",
    storageBucket: "tweeter-543cc.appspot.com",
    messagingSenderId: "282889847870",
    appId: "1:282889847870:web:29f63cc32895b6cb81bd6f",
    measurementId: "G-JN6XQB6GZN"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();

export default db; 