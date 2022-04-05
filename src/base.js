import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB72tQzZIfl0TdX71_ihFUApTi3SY5HqLg",
  authDomain: "very-hot-burgers-ae4b2.firebaseapp.com",
  databaseURL: "https://very-hot-burgers-ae4b2-default-rtdb.firebaseio.com",
});

const base = Rebase .createClass(firebaseApp.database());// создали базу данных