import firebase from "firebase";

// Add your own Firebase project's config data here.
const config = {
apiKey: "AIzaSyA7XBbFkLBHzk_9TdpGle29JP5aSSWtqI8",
authDomain: "medapp-c1e39.firebaseapp.com",
projectId: "medapp-c1e39",
storageBucket: "medapp-c1e39.appspot.com",
messagingSenderId: "550409967090",
appId: "1:550409967090:web:08de5b58d3f23657ab076b",
measurementId: "G-H20MVKYFJP"
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database;
export const auth = firebase.auth;
export const storage = firebase.storage();
export const messaging = firebase.messaging();
