import * as firebase from "firebase";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCS918zqglPCzabroD8h43Ms9xNmAso74",
  authDomain: "react-native-first-proje-d4825.firebaseapp.com",
  projectId: "react-native-first-proje-d4825",
  storageBucket: "react-native-first-proje-d4825.appspot.com",
  messagingSenderId: "756167944437",
  appId: "1:756167944437:web:17e6ebcd547a9794b07dbc",
  measurementId: "G-5L0TJVYL6B",
};

export default firebase.initializeApp(firebaseConfig);
