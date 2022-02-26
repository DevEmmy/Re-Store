import React from 'react'
import './Auth.css'
import {
  Link
} from 'react-router-dom'


function Auth() {
  return (
    <div>
        <h1 className='login_head'> Login </h1>

        <Link to='/register'>
            <div className="register_social_btn">
                Sign Up with Google
            </div>
        </Link>

        <div className="login_social_btn">
            <p>I have an account, <span className="sign_in_btn">Sign In</span></p>
        </div>
    </div>
  )
}

export default Auth