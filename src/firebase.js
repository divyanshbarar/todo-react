// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import firebase from 'firebase'


const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCseHIbeyxaHAOA1oit7n_iufvYtqgKXCY",
    authDomain: "todoreact-4978f.firebaseapp.com",
    projectId: "todoreact-4978f",
    storageBucket: "todoreact-4978f.appspot.com",
    messagingSenderId: "136164386708",
    appId: "1:136164386708:web:c44856f4286f88b0f39181",
    measurementId: "G-6G44KB4K7H"
  });

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
//const auth = firebase.auth();
const db = firebaseConfig.firestore();

// //initiating references to the databases
// const usersRef = db.collection('users')

// // for privileges purposes
// const functions = firebase.functions();

//google provider sign-in
//const googleProvider = new firebase.auth.GoogleAuthProvider();


export default db;