import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBzUUQ2Nmif6axR_YtqmC5gYWUvynmol3w',
  authDomain: 'react-blog-14c39.firebaseapp.com',
  projectId: 'react-blog-14c39',
  storageBucket: 'react-blog-14c39.appspot.com',
  messagingSenderId: '93298182059',
  appId: '1:93298182059:web:62c645d942999c88fa74ee',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
