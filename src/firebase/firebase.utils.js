import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDgVn-Ch7cIAABSO4bnpy4gosZRjKuskdY",
    authDomain: "crwn-db-d68a9.firebaseapp.com",
    databaseURL: "https://crwn-db-d68a9.firebaseio.com",
    projectId: "crwn-db-d68a9",
    storageBucket: "",
    messagingSenderId: "641552880099",
    appId: "1:641552880099:web:00da73a11eace516"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
