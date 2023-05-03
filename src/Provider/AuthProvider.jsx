import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null)

const auth= getAuth(app);
const AuthProvider = ({children}) => {

      //create user or register email pass
      const createUser=(email,password)=>{
            return createUserWithEmailAndPassword(auth,email,password);
      }

      //sign in with email pass
      const userSignIn=(email,password)=>{
            return signInWithEmailAndPassword(auth,email,password);
      }

      const authInfo={
            createUser,
            userSignIn

      }
      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;