import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/Firebase.config';

// google provider
const googleProvider = new GoogleAuthProvider
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loadig, setLoading] = useState(true);

    // create user with email password
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user with email and password
    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update profile
    const updateUserProfile = (updateData) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, updateData)
    }

    // sign in user with google
    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // sign out user
    const signOutUser = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const userInfo = {
        user,
        loadig,
        createUser,
        signInUser,
        signInWithGoogle,
        updateUserProfile,
        signOutUser,
    }
    return <AuthContext value={userInfo}>{children}</AuthContext>
};

export default AuthProvider;