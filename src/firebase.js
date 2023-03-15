import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB_nUVRhTK_JLHvRmfM_H3BE8bjSosZIpM",
  authDomain: "appinventor-e1be2.firebaseapp.com",
  databaseURL: "https://appinventor-e1be2-default-rtdb.firebaseio.com",
  projectId: "appinventor-e1be2",
  storageBucket: "appinventor-e1be2.appspot.com",
  messagingSenderId: "717541199681",
  appId: "1:717541199681:web:54e03a9f762d4d1cfb9bc0",
  measurementId: "G-SYZ9LP9CWB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

export default db;
