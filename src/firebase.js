// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "clone-xtwitter.firebaseapp.com",
  projectId: "clone-xtwitter",
  storageBucket: "clone-xtwitter.appspot.com",
  messagingSenderId: "168063597763",
  appId: "1:168063597763:web:3e33170ed24129069f3676",
  measurementId: "G-69RLYT77MN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


/*
// Craft rules based on data in your Firestore database
4
// allow write: if firestore.get(
5
//    /databases/(default)/documents/users/$(request.auth.uid)).data.isAdmin;
6
service firebase.storage {
7
  match /b/{bucket}/o {
8
    match /{allPaths=**} {
9
      allow read;
10
      allow write: if
11
      request.resource.size < 2 * 1024 * 1024 &&
12
      request.resource.contentType.matches("image/.*")
13
    }
14
  }
15
}

*/