import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { USER_AVATAR } from '../utils/constants';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const fullName = useRef(null);
    const email = useRef(null);
    const dispatch = useDispatch();
    const password = useRef(null);
    const navigate = useNavigate();
    const handleButtonClick = () => {
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);

        if (message) return;

        if (!isSignInForm) {
            //Sign Up
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: fullName.current.value,
                        photoURL: USER_AVATAR
                    }).then(() => {
                        // Profile updated!
                        console.log("User SignUp::", user); 
                        const {uid,email,displayName,photoURL} = auth.currentUser;  
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                        navigate("/browse");
                    }).catch((error) => {
                        setErrorMessage(error.message);
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(error.message);
                    // ..
                });
        } else {
            //Sign In
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log("User SignIn::", user);
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(error.message);
                });
        }
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />
            <div className='w-full h-full'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/37372b0c-16ef-4614-9c66-f0464ffe4136/web/IN-en-20260216-TRIFECTA-perspective_74aa38a5-f527-417e-a604-a039567a350b_medium.jpg'
                    alt='Netflix BG' />
            </div>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/75 p-10 rounded-sm w-[400px] flex flex-col'>
                <form onSubmit={(e) => e.preventDefault()} className='flex flex-col items-start gap-3'>
                    <h1 className='text-white font-medium text-4xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                    <div className='mt-4'>
                        {isSignInForm ? null : (
                            <input
                                ref={fullName}
                                type='text'
                                placeholder='Full Name'
                                className='p-2 rounded-sm mb-3 w-full bg-gray-700 text-white' />
                        )}

                        <input
                            ref={email}
                            type='text'
                            placeholder='Email or phone number'
                            className='p-2 rounded-sm mb-3 w-full bg-gray-700 text-white' />

                        <input
                            ref={password}
                            type='password'
                            placeholder='Password'
                            className='p-2 rounded-sm mb-3 w-full bg-gray-700 text-white' />

                    </div>

                    <p className='ErrorMessage text-red-600'>{errorMessage}</p>
                    <button onClick={handleButtonClick} className='bg-[#E50914] text-white py-2 rounded-sm px-6 w-full'>{isSignInForm ? "Sign In" : "Sign Up"}</button>

                    <div className='flex items-center justify-between w-full mt-3'>
                        <div className='flex items-center'>
                            <input type='checkbox' className='mr-2' />
                            <span className='text-gray-400'>Remember me</span>
                        </div>
                        <a href='#' className='text-gray-400'>Need help?</a>
                    </div>
                </form>
                <div className='flex items-start gap-1 mt-10 text-gray-400 cursor-pointer' onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? " : "Already have an account? "}
                    <a href='#' className='text-white'>Sign up now.</a>
                </div>
                <div className='text-gray-400 mt-3'>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href='#' className='text-white'>Learn more.</a>
                </div>
            </div>
        </div>
    )
}

export default Login