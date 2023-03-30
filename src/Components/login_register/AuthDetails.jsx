import React,{useEffect, useState} from 'react'
import {auth} from '../../firebase'
import {onAuthStateChanged} from "firebase/auth";
import '../../App'

const AuthDetails = () => {
    const [authuser, setAuthUser] = useState(null);
    useEffect(() => {
         onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
    })
},
 []);
  return (
    <div>{authuser? <p>hello</p>: <p>there</p> }</div>
  )
}

export default AuthDetails``