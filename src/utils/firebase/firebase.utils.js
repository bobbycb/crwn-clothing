import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyDf4tpFS0FeglzO6ef8p56zTRgKTtl4k0Q",
    authDomain: "crwn-clothing-db-3d910.firebaseapp.com",
    projectId: "crwn-clothing-db-3d910",
    storageBucket: "crwn-clothing-db-3d910.appspot.com",
    messagingSenderId: "115797289095",
    appId: "1:115797289095:web:481102b7acce614adc7022"
}; 

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async ( userAuth ) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot)
    console.log(userSnapshot.exists())

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
    // if user data does not exist
    // create / set the document with the data from userAuth in my collection
    
    // if user data exists
    // return userDocRef
}