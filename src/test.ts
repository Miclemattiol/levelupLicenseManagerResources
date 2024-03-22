import { initializeApp, getApps } from 'firebase/app';
import * as dotenv from 'dotenv';
import {
	connectAuthEmulator,
	getAuth,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';
import { connectStorageEmulator, getStorage } from 'firebase/storage';

dotenv.config();

const config = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
	measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

console.log(config);

export const firebaseApp =
	getApps().length === 0 ? initializeApp(config) : getApps()[0];

connectAuthEmulator(getAuth(firebaseApp), 'http://localhost:9099', {
	disableWarnings: true,
});
connectFirestoreEmulator(getFirestore(firebaseApp), 'localhost', 8080);
connectStorageEmulator(getStorage(firebaseApp), 'localhost', 9199);
connectFunctionsEmulator(getFunctions(firebaseApp), 'localhost', 5001);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

