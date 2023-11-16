// firebase.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js';

const firebaseConfig = {
    apiKey: "AIzaSyBWsGUdkz4LdlGRvPNevDJCeKWpHSsDbwQ",
    authDomain: "kongo-9dcea.firebaseapp.com",
    databaseURL: "https://kongo-9dcea-default-rtdb.firebaseio.com",
    projectId: "kongo-9dcea",
    storageBucket: "kongo-9dcea.appspot.com",
    messagingSenderId: "768506636607",
    appId: "1:768506636607:web:de744ae024ad5ab6714b8a"
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;