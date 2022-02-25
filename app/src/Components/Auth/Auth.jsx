import React from 'react'
import './Auth.css'

function Auth() {
  return (
    <div>
        <h1 className='login_head'> Login </h1>

        <div className="register_social_btn">
            Sign Up with Google
        </div>

        <div className="login_social_btn">
            <p>I have an account, <span className="sign_in_btn">Sign In</span></p>
        </div>
    </div>
  )
}

export default Auth