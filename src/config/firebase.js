import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCHODlIETL2yvuViH-QsButVmwW0T-Wfco",
    authDomain: "tribute-16d1a.firebaseapp.com",
    databaseURL: "https://tribute-16d1a.firebaseio.com",
    projectId: "tribute-16d1a",
    storageBucket: "tribute-16d1a.appspot.com",
    messagingSenderId: "235976265197",
    appId: "1:235976265197:web:daf3278c4fe00fcf7e6be4",
    measurementId: "G-NVF24MYTN0"
  };



//Init
firebase.initializeApp(firebaseConfig);
firebase.firestore();


export default firebase