import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
      <div className='absolute'>
        <Header />
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/ee951142-2027-4179-ae6c-71f83929c30f/US-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="moviegrid"/>
      </div>
      <form className='absolute my-30 mx-auto opacity-75'>
        <input type="text" placeholder='Email or Phone Number' className='p-2 m-2 ' />
        <input type ="password" placeholder='password' className='p-2 m-2 ' />
        <button className='p-4 m-4'>Sign In</button>
        <p>New to NetFlix? Sign In</p>
      </form>
    </div>
    
  )
}

export default Login