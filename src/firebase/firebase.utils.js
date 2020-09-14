import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCCUICyAOMg6sQciSGXyvNcAYBdHgpw-VM",
  authDomain: "calypso-cosmetics.firebaseapp.com",
  databaseURL: "https://calypso-cosmetics.firebaseio.com",
  projectId: "calypso-cosmetics",
  storageBucket: "calypso-cosmetics.appspot.com",
  messagingSenderId: "852444326841",
  appId: "1:852444326841:web:960acb20a19379a775a468",
  measurementId: "G-7GH7T08FHG",
};

// Takes user auth object and stores it in the firestore database
export const createdUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export default firebase;
