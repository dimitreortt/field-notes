// import firebase from "firebase/app"
// import "firebase/auth"
// import "firebase/firestore"
import firebase from "firebase"

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// }

const firebaseConfig = {
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

export const db = firebase.firestore()
export const auth = firebase.auth()

export default db
