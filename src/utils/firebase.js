import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, connectAuthEmulator, getAuth } from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyBLKlCKFQh9Geh_boqjnwXO-rLN8VGjqBY",
  authDomain: "mall-mystery-heroes.firebaseapp.com",
  projectId: "mall-mystery-heroes",
  storageBucket: "mall-mystery-heroes.appspot.com",
  messagingSenderId: "47179087958",
  appId: "1:47179087958:web:c435cbeeb77d29b884bbf7",
  measurementId: "G-6YF35VGXE3"
};
  

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  const functions = getFunctions(app);

  console.log("Firebase apped:", app);

  if (process.env.NODE_ENV === 'development') {
    connectFunctionsEmulator(functions, "localhost", 5001);
    connectAuthEmulator(auth, "http://localhost:9099");
    connectFirestoreEmulator(db, "localhost", 8080);
  }

  export const googleProvider = new GoogleAuthProvider();
  export { auth, db, functions };

