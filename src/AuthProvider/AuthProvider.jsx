import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";

// context API created
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();

  //create account with Email
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login account with email
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // logout user
  const logoutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    signInUser,
    user,
    googleSignIn,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
