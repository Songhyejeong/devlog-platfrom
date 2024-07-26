import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore, Timestamp} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET ,
    messagingSenderId: import.meta.env.VITE_MESSAGEING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const appAuth = getAuth();
const appFireStore = getFirestore(app);
const timestamp = Timestamp;

export {appAuth, appFireStore, timestamp};
