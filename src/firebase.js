import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyApqUmAB6HoDLk0MCyaO-tbWAF6dSFyxhE",
    authDomain: "wsi-tests.firebaseapp.com",
    databaseURL: "https://wsi-tests.firebaseio.com",
    projectId: "wsi-tests",
    storageBucket: "wsi-tests.appspot.com",
    messagingSenderId: "322140776751",
    appId: "1:322140776751:web:d04302aa628371d6bb59da",
    measurementId: "G-SQQPKFTVC0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Connection with the Database
const database = firebase.firestore();

export default database;