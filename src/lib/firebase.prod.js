import Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

var firebaseConfig = {
  apiKey: 'AIzaSyBi2ZAmZF4zUnOkvI6VON4uznYkssylTzM',
  authDomain: 'netflix-209c1.firebaseapp.com',
  projectId: 'netflix-209c1',
  storageBucket: 'netflix-209c1.appspot.com',
  messagingSenderId: '406860354446',
  appId: '1:406860354446:web:1ad84bd74e4d2e6761cadf',
};
// Initialize Firebase
const firebase = Firebase.initializeApp(firebaseConfig);
// seedDatabase(firebase);

export { firebase };
