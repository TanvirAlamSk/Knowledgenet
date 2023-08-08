import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import app from '../../Firebase/Firebase.init';

export const AuthContext = createContext()
const auth = getAuth(app)

const UserContext = ({ children }) => {

    const [user, setUser] = useState([]);
    const [loader, setLoader] = useState(true)

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()


    const createUser = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert("signup Successful")
            }).catch((error) => {

            })
    }

    const googlesignin = () => {
        signInWithPopup(auth, googleProvider)
            .then(() => {
                alert("google login Successful")
            })
            .catch(() => { })

    }
    const githubsignin = () => {
        signInWithPopup(auth, githubProvider)
            .then(() => {
                alert("git login Successful")

            })
            .catch(() => { })

    }

    // login
    const userLogin = (email, password) => {
        setLoader(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {

                alert("user login Successful")
            })
            .catch((error) => {
                alert(error)
            })

    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                alert("logout Successful")
            })
            .catch(() => { })
    }

    useEffect(() => {
        const unsubscriber = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoader(false)
        })
        return () => unsubscriber()
    }, [])


    const authinfo = { user, loader, createUser, googlesignin, githubsignin, logout, userLogin }
    return (
        <div>
            <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default UserContext;