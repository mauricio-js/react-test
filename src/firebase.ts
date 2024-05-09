import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB8K8vzTRjo42Zr5EstXc0jyagjI6mnSaw",
    authDomain: "react-test-f91ee.firebaseapp.com",
    projectId: "react-test-f91ee",
    storageBucket: "react-test-f91ee.appspot.com",
    messagingSenderId: "1003182683003",
    appId: "1:1003182683003:web:d129d2342672e1fe0e43de",
    measurementId: "G-CDTFMRE8NC"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);