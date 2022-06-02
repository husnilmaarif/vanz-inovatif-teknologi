import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// =================================================
// sign out
// import { getAuth, signOut } from "firebase/auth";

// const auth = getAuth();
// signOut(auth).then(() => {
// Sign-out successful.
// }).catch((error) => {
// An error happened.
// });
