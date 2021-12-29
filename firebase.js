// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwBJgJo4HSThi3PF7If-2eYtJSL_HFPJ8",
  authDomain: "instagram-react-next.firebaseapp.com",
  projectId: "instagram-react-next",
  storageBucket: "instagram-react-next.appspot.com",
  messagingSenderId: "443359648713",
  appId: "1:443359648713:web:575d6f7fb1dd6be8b22618"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export {app, db, storage}