import firebase from "firebase";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAqglZRA6LYkR-fJLWvMlFSz3f5v1Wy4Nc",
    authDomain: "chio-gonzalez.firebaseapp.com",
    projectId: "chio-gonzalez",
    storageBucket: "chio-gonzalez.appspot.com",
    messagingSenderId: "158964057334",
    appId: "1:158964057334:web:0502eeedb34f430ead58d7"
  };

  const app = firebase.initializeApp(firebaseConfig)

  export function getFirebase(){
      return app
  }

  export function getFirestore(){
      return firebase.firestore(app)
  }