import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDTkxNHeOB5IaJy894wNXe71NCmX9P393Q",
  authDomain: "escola-544c2.firebaseapp.com",
  databaseURL: "https://escola-544c2-default-rtdb.firebaseio.com",
  projectId: "escola-544c2",
  storageBucket: "escola-544c2.appspot.com",
  messagingSenderId: "858337428797",
  appId: "1:858337428797:web:e95ab54dd58de4bdf5f154"
};
  firebase.initializeApp(firebaseConfig);
  export default firebase.database()
 

  