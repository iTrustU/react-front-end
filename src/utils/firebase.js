import firebase from 'firebase'

const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY
const FIREBASE_API_DOMAIN = process.env.REACT_APP_FIREBASE_API_DOMAIN
const FIREBASE_DATABASE_URL = process.env.REACT_APP_FIREBASE_DATABASE_URL
const FIREBASE_PROJECT_ID = process.env.REACT_APP_FIREBASE_PROJECT_ID
const FIREBASE_MESSAGING_SENDER_ID = process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_API_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: "",
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID
}

firebase.initializeApp(firebaseConfig)

export default firebase
