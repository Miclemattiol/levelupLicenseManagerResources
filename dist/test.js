"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.auth = exports.firebaseApp = void 0;
const app_1 = require("firebase/app");
const dotenv = require("dotenv");
const auth_1 = require("firebase/auth");
const firestore_1 = require("firebase/firestore");
const functions_1 = require("firebase/functions");
const storage_1 = require("firebase/storage");
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
exports.firebaseApp = (0, app_1.getApps)().length === 0 ? (0, app_1.initializeApp)(config) : (0, app_1.getApps)()[0];
(0, auth_1.connectAuthEmulator)((0, auth_1.getAuth)(exports.firebaseApp), 'http://localhost:9099', {
    disableWarnings: true,
});
(0, firestore_1.connectFirestoreEmulator)((0, firestore_1.getFirestore)(exports.firebaseApp), 'localhost', 8080);
(0, storage_1.connectStorageEmulator)((0, storage_1.getStorage)(exports.firebaseApp), 'localhost', 9199);
(0, functions_1.connectFunctionsEmulator)((0, functions_1.getFunctions)(exports.firebaseApp), 'localhost', 5001);
exports.auth = (0, auth_1.getAuth)(exports.firebaseApp);
exports.db = (0, firestore_1.getFirestore)(exports.firebaseApp);
