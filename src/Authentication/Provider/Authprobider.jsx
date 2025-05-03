import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../Firabase/firebase.config";

export const AuthContext =createContext(null)
const auth = getAuth(app);

const Authprobider = ({children}) => {
    const [user,setuser] =useState(null)
    const [loading,setloading] =useState(true)

    const createUser =(email,password)=>{
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn =(email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout =()=>{
        setloading(true)
        return signOut(auth)
    }
   

    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth,curentUser=>{
            setuser(curentUser)
            console.log("new user here",curentUser);
            setloading(false)

        })

        return () =>{
            return unSubscribe()
        }
    })

    const authInfo ={
        user,
        loading,
        createUser,signIn,logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprobider;