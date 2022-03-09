import React, { useRef, useState, useEffect } from 'react'
import './Auth.css'
import {
  Link
} from 'react-router-dom'
import axios from 'axios'

function Auth() {

  const [ error, setError ] = useState('')

  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);


    useEffect(()=>{
      if(localStorage.getItem('token') !== null){
        window.location.replace('https://localhost:3000/profile')
      }
    }, [])
  const register = (event)=>{
    event.preventDefault()
  const user = {
    username: fullNameRef?.current.value,
    email: emailRef?.current.value,
    password : passwordRef?.current.value,
  }

      axios({
    method: 'post',
    url: 'http://127.0.0.1:1337/auth/local/register',
    data: JSON.stringify(user),
    headers: {
      Accept: "application/json",
            "Content-Type": "application/json"
        }
    }).then(data=>{console.log(data.data.key);
        localStorage.clear();
        localStorage.setItem('token', data.data.key);
        window.location.replace('http://localhost:3000/register');
    })
console.log('user')

  }
  

  return (
    <div>
        <h1 className='login_head'> Login </h1>

          <div className="register_social_btn">
                Sign Up with Google
            </div>
     
          <p>{error}</p>
            <form  className='register_form'  onSubmit={register}>
                <input type="text" ref={fullNameRef}  placeholder='Full Name'/>
                <input type="email" ref={emailRef} />
                <input type="password" ref={passwordRef} />
            <button onClick={()=>console.log("hey")}>login</button>
            </form>

        <div className="login_social_btn">
            <p>I have an account, <span className="sign_in_btn">Sign In</span></p>
        </div>
  
    </div>
  )
}

export default Auth