import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI5zk-gS8EwjFldWVZuAzaUuIucHUmAQk",
  authDomain: "mern-estate-41d98.firebaseapp.com",
  projectId: "mern-estate-41d98",
  storageBucket: "mern-estate-41d98.appspot.com",
  messagingSenderId: "537326324052",
  appId: "1:537326324052:web:7d6902ef86708c48d120c1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const auth = getAuth(app)