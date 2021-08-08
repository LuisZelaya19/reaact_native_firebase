import firebase from 'firebase'

import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCRxICquZv_8f_fQPq2ONOBmyRo-TK-5QE",
    authDomain: "react-native-firebase-c056f.firebaseapp.com",
    projectId: "react-native-firebase-c056f",
    storageBucket: "react-native-firebase-c056f.appspot.com",
    messagingSenderId: "869477873858",
    appId: "1:869477873858:web:1d9b4cf54d0bacd377a35b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
	firebase,
	db
}
