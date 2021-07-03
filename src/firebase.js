import firebase from "firebase";

const firebaseConfig = {
      apiKey: "AIzaSyDcKDtzk-YDDG49dIARTTVCBZxM0YJT1Jc",
      authDomain: "mesob-kids-e6b8d.firebaseapp.com",
      projectId: "mesob-kids-e6b8d",
      storageBucket: "mesob-kids-e6b8d.appspot.com",
      messagingSenderId: "771780727055",
      appId: "1:771780727055:web:03d6f08b018127ffbdae7a",
      measurementId: "G-WKP4XYR8LE"
      };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;