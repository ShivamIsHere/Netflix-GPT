import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../utils/Firebase';


const Login = () => {
  const [isSignInForm,setIsSignInForm]= useState(true);
  const [errorMessage,setErrorMessage]=useState(null);



  const email=useRef(null);
  const password=useRef(null);


  const toggleSignInForm=()=>{


    setIsSignInForm(!isSignInForm);
  }

  const handleButtonClick=()=>{
    const fetchedEmail=email.current.value;
    const fetchedPassword=password.current.value;


    console.log(fetchedEmail)
    console.log(fetchedPassword);

    const message=checkValidData(fetchedEmail,fetchedPassword);
    console.log(message);
    
    setErrorMessage(message);

    if(!message){
      if(!isSignInForm){
        createUserWithEmailAndPassword(auth, fetchedEmail, fetchedPassword)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
    // ..
  });
      }else{
          signInWithEmailAndPassword(auth, fetchedEmail, fetchedPassword)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              // ...
              console.log(user)
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-" + errorMessage)

            });
      }
    }

    //signin/signup

  }

  return (
    <div>
    <Header/>
    <div className='absolute'>
      <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bglogo"
        />
    </div> 
    <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black/85 my-36 mx-auto right-0 left-0 text-white rounded-lg '>
      <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In":"Sign Up"}</h1>
      {!isSignInForm && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>}
      <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/> 
      <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
      <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
      <button className='p-4 my-6 w-full bg-red-700 rounded-lg ' onClick={handleButtonClick}>{isSignInForm?"Sign In":"Sign Up"} </button>
      <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New to Netfix ? Sign Up Now":"Already Registered? Sign In Now"}</p>
    </form>
    </div>
  )
}

export default Login
