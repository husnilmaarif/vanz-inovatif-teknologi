import firebase from "firebase/compat/app";
import 'firebase/auth'
// import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAH5P3wofqca-9vEnv27mDCq2WXQVt38bw",
  authDomain: "notes-sederhana.firebaseapp.com",
  projectId: "notes-sederhana",
  storageBucket: "notes-sederhana.appspot.com",
  messagingSenderId: "328996954984",
  appId: "1:328996954984:web:1f2edd793a611480c4ecdd",
  measurementId: "G-RH1TZVXCEZ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
