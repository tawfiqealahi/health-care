import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged,signOut  } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication(); 

const useFirebase=()=>{
    const[user,setUser]=useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle= () =>{
        signInWithPopup(auth, googleProvider)
        .then(result=> {
            const user =(result.user);
            setUser(user);
        })
    }
// log out
const logOut =()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
}
  

//  observe wheather user auth state changed or not
    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
          });
    } ) 

        return{
            user,
            signInUsingGoogle,
            logOut


        }

}

export default useFirebase;