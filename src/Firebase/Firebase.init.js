// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjGDwZFARnLYQYKTEZfHvIGxGWBtFKYIw",
    authDomain: "knowledgenet-74c18.firebaseapp.com",
    projectId: "knowledgenet-74c18",
    storageBucket: "knowledgenet-74c18.appspot.com",
    messagingSenderId: "954146152277",
    appId: "1:954146152277:web:8292412f47cdf3f50559dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;