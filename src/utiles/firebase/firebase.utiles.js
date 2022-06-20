import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA1fUE5OiBiV6rx-ri7s0GAViQEvM2IjvU",
    authDomain: "paul-react-dbdec.firebaseapp.com",
    projectId: "paul-react-dbdec",
    storageBucket: "paul-react-dbdec.appspot.com",
    messagingSenderId: "521948406503",
    appId: "1:521948406503:web:6ac0df9ae8e740fb413842"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const singInWithGoogePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid )
    const userSnapshot = await getDoc(userDocRef);
    
    if(!userSnapshot.exists()){
        const { displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        }catch(error){
            console.log('error creating the user ', error.message);
        }
    }

    return userDocRef;
  }