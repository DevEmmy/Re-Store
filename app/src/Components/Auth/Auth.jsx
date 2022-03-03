import React from 'react'
import './Auth.css'
import {
  Link
} from 'react-router-dom'


function Auth() {
  return (
    <div>
        <h1 className='login_head'> Login </h1>

        <a href="https://ad60-197-210-29-160.ngrok.io/">
          <div className="register_social_btn">
                Sign Up with Google
            </div>
        </a>
            

        <div className="login_social_btn">
            <p>I have an account, <span className="sign_in_btn">Sign In</span></p>
        </div>
    </div>
  )
}

export default Auth