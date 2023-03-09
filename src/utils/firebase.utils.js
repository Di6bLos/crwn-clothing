import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect} from "firebase/auth"
import {getFirestore, collection, doc, addDoc, getDoc, setDoc} from "firebase/firestore";

// Links to the proper database
const firebaseConfig = {
    apiKey: "AIzaSyBUw50Fb7LnLFAoTb3Rrtm9cTociRPxWeQ",
    authDomain: "crwn-clothing-db-9dfd6.firebaseapp.com",
    projectId: "crwn-clothing-db-9dfd6",
    storageBucket: "crwn-clothing-db-9dfd6.appspot.com",
    messagingSenderId: "770748456913",
    appId: "1:770748456913:web:910e57bec2ca91c0940af0"
  };

// Initializes the App using the configuration object above
const App = initializeApp(firebaseConfig);

// Authentication with Google
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
})

export const auth = getAuth(App);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(App);

export const createUserDoc = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);

    // console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    // console.log(userSnapshot);

    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            })
            console.log("Doc created with ID: ", userDocRef.id);
        } catch(error) {
            console.log("Error adding doc: ", error.message);
        }
    } return userDocRef;


}






  
  