import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null)

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {
      const [user, setUser] = useState([])

      //create user or register email pass
      const createUser = (email, password) => {
            return createUserWithEmailAndPassword(auth, email, password);
      }

      //sign in with email pass
      const userSignIn = (email, password) => {
            return signInWithEmailAndPassword(auth, email, password);
      }


      // sign in with google 
      const googleSignIn = () => {
            return signInWithPopup(auth, googleProvider)

      }

      // sign in with github 
      const githubSignIn = () => {
            return signInWithPopup(auth, githubProvider);
      }

      // sign out 
      const logOut = () => {
            return signOut(auth)
      }

      // user profile set 
      const userProfile = (name, photoUrl) => {
            const currentUser = auth.currentUser;
            if (currentUser) {
                  updateProfile(currentUser, {
                        displayName: name,
                        photoURL: photoUrl
                  })
                        .then(() => {
                              
                        })
                        .catch((error) => {
                              
                        });
            } else {
                  console.log('No user is currently signed in.');
            }
      };
      // current user 
      useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, currentUser => {
                  setUser(currentUser)
            })
            return () => {
                  return unsubscribe;
            }
      }, [])

      const authInfo = {
            user,
            createUser,
            userSignIn,
            googleSignIn,
            githubSignIn,
            logOut,
            userProfile


      }
      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;