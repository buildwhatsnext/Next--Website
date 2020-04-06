import firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDi-aeezkk_-vncunumZUxSI7wETFXJ8eM",
    authDomain: "next-auth-hq.firebaseapp.com",
    databaseURL: "https://next-auth-hq.firebaseio.com",
    projectId: "next-auth-hq",
    storageBucket: "next-auth-hq.appspot.com",
    messagingSenderId: "468777393847",
    appId: "1:468777393847:web:3931f7ee4200b6718fb732",
    measurementId: "G-P3FTXQJB8V"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;
