import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
  } from "firebase/auth";
  import { useEffect, useState } from "react";
  import initializeAuthentication from "../Firebase/firebase.initialize";
  
  initializeAuthentication();
  
  const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState("");
  
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
  
    const signInWithGoogle = (location, histroy) => {
      setIsloading(true);
      return signInWithPopup(auth, googleProvider)
        .then((result) => {
          const redairect = location?.state?.from || "/";
          histroy.replace(redairect);
          setUser(result.user);
          console.log(result.user);
          setError("");
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => setIsloading(false));
    };
  
    const userRegister = (name, email, password, history) => {
      setIsloading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          history.replace("/");
          const user = { email, displayName: name };
          setUser(user);
          setError("");
        //   allUserRegisterData(email);
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => setIsloading(false));
    };
  
    // log in
  
    const logInUser = (email, password, location, histroy) => {
      setIsloading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const redairect = location?.state?.from || "/";
          histroy.replace(redairect);
          setError("");
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => setIsloading(false));
    };
  
    useEffect(() => {
      const unKnownUser = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser({});
        }
        setIsloading(false);
      });
      return () => unKnownUser;
    }, [auth]);
  
    const logOut = () => {
      setIsloading(true);
      signOut(auth)
        .then(() => {})
        .finally(() => setIsloading(false));
    };
  
    // const allUserRegisterData = (email) => {
    //   fetch("https://fierce-taiga-81798.herokuapp.com/userData", {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify({ email: email }),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {});
    // };
  
    return {
      user,
      error,
      isLoading,
      userRegister,
      signInWithGoogle,
      logInUser,
      logOut,
    };
  };
  
  export default useFirebase;
  



// import { useState, useEffect } from 'react';
// import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
// import initializeAuthentication from '../Firebase/firebase.init';

// initializeAuthentication();

// const useFirebase = () => {
//     const [user, setUser] = useState({});
//     const [loading, setLoading] = useState(true)
//     const auth = getAuth();
//     const googleProvider = new GoogleAuthProvider();

//     const signInUsingGoogle = () => {
//         return signInWithPopup(auth, googleProvider)
//             .finally(() => { setLoading(false) });
//     }

//     const logOut = () => {
//         setLoading(true);
//         signOut(auth)
//             .then(() => {
//                 setUser({})
//             })
//             .finally(() => setLoading(false))
//     }

//     //   on  auth state changed or not
//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 setUser(user);
//             }
//             else {
//                 setUser({});
//             }
//             setLoading(false);
//         });
//         return () => unsubscribe;
//     }, [auth]);

//     return {
//         user,
//         loading,
//         signInUsingGoogle,
//         logOut
//     }
// }

// export default useFirebase;