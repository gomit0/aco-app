import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZr0CKmeLmgKNgOqOHoN_Kdv5myS30QIw",
  authDomain: "aco-app-ecommerce.firebaseapp.com",
  projectId: "aco-app-ecommerce",
  storageBucket: "aco-app-ecommerce.appspot.com",
  messagingSenderId: "145954171709",
  appId: "1:145954171709:web:1a0b97293091b2ba45f354"
};

const app =initializeApp(firebaseConfig);
const db= getFirestore(app)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
