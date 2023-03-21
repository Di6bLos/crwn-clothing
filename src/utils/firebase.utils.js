import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

// Links to the proper database
const firebaseConfig = {
  apiKey: "AIzaSyBUw50Fb7LnLFAoTb3Rrtm9cTociRPxWeQ",
  authDomain: "crwn-clothing-db-9dfd6.firebaseapp.com",
  projectId: "crwn-clothing-db-9dfd6",
  storageBucket: "crwn-clothing-db-9dfd6.appspot.com",
  messagingSenderId: "770748456913",
  appId: "1:770748456913:web:910e57bec2ca91c0940af0",
};

// Initializes the App using the configuration object above
const App = initializeApp(firebaseConfig);

// Authentication with Google
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(App);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

// Authentication with Email
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

// Sign-in with email and password
export const signInAuthUserWithEmail = (email,password) => {
  if (!email || !password) return;

   return signInWithEmailAndPassword(auth, email, password);

}

// Sign users out
export const signOutUser = () => signOut(auth);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(App);

export const createUserDoc = async (userAuth, additionalInfo) => {

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
      console.log("Doc created with ID: ", userDocRef.id);
    } catch (error) {
      console.error("Error adding doc: ", error.message);
    }
  }
  return userDocRef;
};

// Observer Listener
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);