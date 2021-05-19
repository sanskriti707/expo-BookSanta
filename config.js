import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAsOSbegShBO5xt5Ojcih9FhUDP6TcfB4w",
  authDomain: "book-santa-4e777.firebaseapp.com",
  databaseURL:"https://book-santa-4e777-default-rtdb.firebaseio.com/",
  projectId: "book-santa-4e777",
  storageBucket: "book-santa-4e777.appspot.com",
  messagingSenderId: "990634452913",
  appId: "1:990634452913:web:5df2382fc7be726d55ff90"
};
  
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
