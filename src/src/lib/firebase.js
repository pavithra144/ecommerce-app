import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAACbpzpPpUisKKmQWL8n2hLaNvC5MTDTw",
  authDomain: "e-commerce-a.firebaseapp.com",
  projectId: "e-commerce-a",
  storageBucket: "e-commerce-a.appspot.com",
  messagingSenderId: "926025210669",
  appId: "1:926025210669:web:cef164c262a4a1833051a4",
  measurementId: "G-RZGBZ0ZDC9",
};

const firebase = Firebase.initializeApp(firebaseConfig);
export default { firebase };

// const firebaseApp = firebase.initializeApp({
//   apiKey: "AIzaSyAACbpzpPpUisKKmQWL8n2hLaNvC5MTDTw",
//   authDomain: "e-commerce-a.firebaseapp.com",
//   projectId: "e-commerce-a",
//   storageBucket: "e-commerce-a.appspot.com",
//   messagingSenderId: "926025210669",
//   appId: "1:926025210669:web:cef164c262a4a1833051a4",
//   measurementId: "G-RZGBZ0ZDC9",
// });

// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();

// export { db, auth, storage };
