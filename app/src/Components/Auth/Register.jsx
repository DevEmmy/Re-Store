import React , {useRef, useState}from 'react';
import axios from 'axios';

function Register(){
    const fullNameRef = useRef(null)
    const emailRef = useRef(null)
    const collegeRef = useRef(null)
    const matricNumberRef = useRef(null)
    const departmentRef  = useRef(null)

    const [jwt, setJwt] = useState([])


    const submitProfile = async ()=>{
        const submitProfile = async ()=>{
            const user = {
                fullName: fullNameRef.current.value,
                email: emailRef.current.value,
                college: collegeRef.current.value,
                matricNumber: matricNumberRef.current.value,
                department: departmentRef.current.value,
            }
    
            axios('http://127.0.0.1:1337/profiles', {
                method: 'post',
                data: JSON.stringify(user),
                headers:{
                    "Content-Type": 'application/json',
                    Accept: "application/json"
                }
            })
        }
    }
    return(
        <div className='register_page_container'>
            <div className="top_section">
                <h1>Re-Store</h1>
            </div>

            <form action="" className='register_form'>
                <input type="text" ref={fullNameRef}  placeholder='Full Name'/>
                <input type='email' ref={emailRef} placeholder='Email'/>
                <input type="text" ref={collegeRef}  placeholder='College'/>
                <input type="number" ref={matricNumberRef} placeholder='Matric Number' />
                <input type="text" ref={departmentRef} placeholder='Department'/>

                <input type="button" value="Create Profile" />
            </form>

        </div>
    )

}

export default Register