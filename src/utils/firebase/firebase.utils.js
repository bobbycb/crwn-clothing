import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';

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