import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyA0ukXN9_khpil_NS9jtGl0ru1oGkH8j7Y",
  authDomain: "login-authentication-f8eba.firebaseapp.com",
  projectId: "login-authentication-f8eba",
  storageBucket: "login-authentication-f8eba.appspot.com",
  messagingSenderId: "400329675893",
  appId: "1:400329675893:web:24305e98d77c42cc3fd43c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { auth };
export default db;
