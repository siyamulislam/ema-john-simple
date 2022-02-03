import * as  firebase from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile,sendEmailVerification  } from "firebase/auth";
import firebaseConfig from './firebaseConfig';


export const initializeLoginFramework = () => { 
    if(firebase.getApps.length===0){
        firebase.initializeApp(firebaseConfig);
    }
}

export const handelGoogleSignIn = async () => {  
const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        const { email, displayName, photoURL } = user;
        const signIndUser = {
            isSignedIn: true,
            name: displayName,
            email: email,
            url: photoURL,
        };
        return signIndUser;
    } catch (error) {
        console.log(error);
    }
}

export const  CreateUserWithEmailAndPassword=async (name,email,password)=>{
    const auth = getAuth();
   try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // Signed in  
        const signIndUser = {
            isSignedIn: true,
            name: name,
            email: email,
            url: 'https://randomuser.me/api/portraits/lego/6.jpg',
            password: password,
            isSuccess: true
        };
        UpdateUserName(name);
        sendEmailVerify();
        console.log('sign in user of the current phase!', userCredential.user);
        return signIndUser;
    } catch (error) {
        const newUser = {};
        newUser.error = error.message;
        return newUser;
    }
}
export const  SignInWithEmailAndPassword=async (email, password)=> {
  const auth = getAuth();
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // Signed in 
        const user = userCredential.user;
        const { email: email_1, password: password_1 } = user;
        const signIndUser = {
            isSignedIn: true,
            name: user.displayName,
            email: email_1,
            url: 'https://randomuser.me/api/portraits/lego/6.jpg',
            password: password_1,
            isSuccess: true,
        };

        return signIndUser;
    } catch (error) {
        const newUser = {};
        newUser.error = error.message;
        return newUser;
    }
}

const UpdateUserName = name => {
    
const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: name,
      //  photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      // Profile updated!
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });
  }

 export  const handelSignOut = () => {
     
const auth = getAuth();
    const signOutUser = {
      isSignedIn: false,
      name: '',
      email: '',
      url: '',
      error: '',
      isSuccess: false,
    }
    return signOut(auth).then(() => {
      // Sign-out successful.
      return signOutUser;
    }).catch((error) => {
      // An error happened.
    });
  }

  const sendEmailVerify=  () => { 
const auth = getAuth();
sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    // ...
  });
  }