// Import the functions you need from the SDKs you need
import { getApps, getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "your-firebase-web-app-config-api-key",
  authDomain: "your-firebase-web-app-config-auth-domain",
  projectId: "your-firebase-web-app-config-project-id",
  storageBucket: "your-firebase-web-app-config-storage-bucket",
  messagingSenderId: "your-firebase-web-app-config-messaging-sender-id",
  appId: "your-firebase-web-app-config-app-id",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

export default app;
export { auth, googleProvider };
