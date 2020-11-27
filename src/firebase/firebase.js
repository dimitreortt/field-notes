import firebase from "firebase"

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBcp9XXo_ApVOZvb8wZ8ROvhpzWKjpKvC0",
  authDomain: "field-notes-bd18f.firebaseapp.com",
  databaseURL: "https://field-notes-bd18f.firebaseio.com",
  projectId: "field-notes-bd18f",
  storageBucket: "field-notes-bd18f.appspot.com",
  messagingSenderId: "46459771316",
  appId: "1:46459771316:web:c32dda2bea3c8bd73bbae1",
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

export default db
