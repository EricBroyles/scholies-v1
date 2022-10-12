import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCTWVrj3yC5f8js2mibCa3mnhqMmizoOjs",
  authDomain: "scholies-dev-v1.firebaseapp.com",
  projectId: "scholies-dev-v1",
  storageBucket: "scholies-dev-v1.appspot.com",
  messagingSenderId: "760028611039",
  appId: "1:760028611039:web:55a24664cc7e5e0a1ac46a"
};

export const app = initializeApp(firebaseConfig);

// // Import the functions you need from the SDKs you need
// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// const firebaseConfig = {
//   apiKey: "AIzaSyCTWVrj3yC5f8js2mibCa3mnhqMmizoOjs",
//   authDomain: "scholies-dev-v1.firebaseapp.com",
//   projectId: "scholies-dev-v1",
//   storageBucket: "scholies-dev-v1.appspot.com",
//   messagingSenderId: "760028611039",
//   appId: "1:760028611039:web:55a24664cc7e5e0a1ac46a"
// };


// firebase.initializeApp(firebaseConfig);
// export const firebaseAuth = firebase.auth();
// export const firestore = firebase.firestore()