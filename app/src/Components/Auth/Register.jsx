import React , {useRef}from 'react';

function Register(){
    const fullNameRef = useRef(null)
    const emailRef = useRef(null)
    const collegeRef = useRef(null)
    const matricNumberRef = useRef(null)
    const departmentRef  = useRef(null)


    const submitProfile = async ()=>{
        const data = await fetch();
        const response = await data.response.json()

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