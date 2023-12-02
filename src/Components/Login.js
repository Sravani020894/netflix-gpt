import React, { useState,useRef } from 'react'
import Header from './Header'
import validateCheck  from '../utils/validateCheck';

const Login = () => {
  let [isSignInForm,setisSignInForm] = useState(true);
  let [message,setmessage] = useState(null);

  const fullname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const validateCredentials = () => {
        console.log(fullname);
        const errmessage = validateCheck(fullname.current.value,email.current.value,password.current.value);
        setmessage(errmessage);
  }
  return (
    <div>
      <div className='absolute'>
        <Header />
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/ee951142-2027-4179-ae6c-71f83929c30f/US-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="moviegrid"/>
      </div>
      <form onSubmit = {(e) => {e.preventDefault()}} className='absolute bg-opacity-80 rounded-lg bg-black w-1/4 my-36 mx-auto right-0 left-0 text-white'>
       <h1 className='font-bold text-2xl py-4 px-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
       {!isSignInForm && (<input ref = {fullname}
           type="text" placeholder='Full Name' 
           className='p-2 my-4 w-full bg-gray-600 rounded-lg' 
        />)}
        <input ref = {email}
           type="text" placeholder='Email or Phone Number' 
           className='p-2 my-4 w-full bg-gray-600 rounded-lg' 
        />
        <input ref = {password}
          type ="password" placeholder='password' 
          className='p-2 my-2 w-full bg-gray-600 rounded-lg' />
        <p className='text-base font-bold text-red-500'>{message}</p> 
        <button onClick={validateCredentials} className='p-2 my-4 w-full bg-red-600 rounded-lg cursor-pointer'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-2 my-4 cursor-pointer' onClick={() => setisSignInForm(!isSignInForm)}>{isSignInForm ? "New to NetFlix? Sign Up now" : "Already registered member?Sign In Now"}</p>
      </form>
    </div>
    
  )
}

export default Login