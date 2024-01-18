import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { app } from '../firebase';
import axios from 'axios';
import { useDispatch} from "react-redux"
import { signIn,signInError,signInSuccess } from '../redux/user/userSlice';


const Oauth = () => {
    const dispatch = useDispatch()
    const url = import.meta.env.VITE_REACT_APP_base_URL
  
    const handleGoogleClick = async() => { 
    try { 
         const provider = new GoogleAuthProvider();
            const auth = getAuth(app)
           const result = await signInWithPopup(auth, provider);
           console.log(result);
           dispatch(signIn())
        const res = await axios.post(`${url}/auth/google`, {
            username:result.user.displayName,
            email: result.user.email,
            photo:result.user.photoURL

        })

        console.log(res);

       
        dispatch(signInSuccess(res))
        alert(`Login Successful`)
        navigate('/')
    } catch (error) {
        console.log(error);
    } }
  return (
    <button type='button' onClick={handleGoogleClick} className="bg-red text-white rounded-lg p-3 hover:bg-tertiary">SIGN IN USING GOOGLE</button>
  )
}

export default Oauth