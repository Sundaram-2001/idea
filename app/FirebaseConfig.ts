// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBNv1llQPnptMb-gRwrs6p5rWYu_Fk8hE",
  authDomain: "shaadi-31f04.firebaseapp.com",
  projectId: "shaadi-31f04",
  storageBucket: "shaadi-31f04.firebasestorage.app",
  messagingSenderId: "920984205058",
  appId: "1:920984205058:web:5b9190e552353fcd85f41b",
  measurementId: "G-SW83HZ0BQK"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const FIREBASE_DB = getFirestore(FIREBASE_APP);