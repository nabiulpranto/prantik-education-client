// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABKVPBz8G8M_z_YS3DtEpZZCSDTzbN50g",
  authDomain: "prantik-education.firebaseapp.com",
  projectId: "prantik-education",
  storageBucket: "prantik-education.appspot.com",
  messagingSenderId: "494733133034",
  appId: "1:494733133034:web:0b8823e67a811be90a0393",
  measurementId: "G-QGNGJLEL8K"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
