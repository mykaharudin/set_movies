// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAv1KY_jBbi9h6zGmb7kdmdTUDYomnVzs",
    authDomain: "project-tmbd.firebaseapp.com",
    projectId: "project-tmbd",
    storageBucket: "project-tmbd.appspot.com",
    messagingSenderId: "786143801034",
    appId: "1:786143801034:web:ef614b561f746bfe32ce33"
};

//inisialisasi firebase dan auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// //export semua yang dibuat 
export {
    auth
};