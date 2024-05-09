// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "clone-instagram-422520.firebaseapp.com",
  projectId: "clone-instagram-422520",
  storageBucket: "clone-instagram-422520.appspot.com",
  messagingSenderId: "816421056866",
  appId: "1:816421056866:web:75b947a186f76e0ab8fc3b",
  measurementId: "G-XD4TLM834N"
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