import firebase from "firebase";

const firebaseConfig = {
        apiKey: "AIzaSyDzREJTrltsPv257ImCSA35UiyAEf_-Lpw",
        authDomain: "mesob-kids.firebaseapp.com",
        projectId: "mesob-kids",
        storageBucket: "mesob-kids.appspot.com",
        messagingSenderId: "196331899670",
        appId: "1:196331899670:web:276910c9c4015383b0de37",
        measurementId: "G-3H1S6M1WFH"
      };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;