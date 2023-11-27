import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <div className='absolute'>
        <Header />
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/ee951142-2027-4179-ae6c-71f83929c30f/US-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="moviegrid"/>
      </div>
      <form className='absolute opacity-75 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white'>
        <h1 className='font-bold text-3xl py-4'>Sign In</h1>
        <input type="text" placeholder='Email or Phone Number' className='p-2 m-2 w-full' />
        <input type ="password" placeholder='password' className='p-2 m-2 w-full' />
        <button className='p-4 m-4 bg-red-600'>Sign In</button>
        <p>New to NetFlix? Sign In</p>
      </form>
    </div>
    
  )
}

export default Login