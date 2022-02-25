import React from 'react';

function Register(){
    return(
        <div className='register_page_container'>
            <div className="top_section">
                <h1>Re-Store</h1>
            </div>

            <form action="" className='register_form'>
                <input type="text" name="fullName"  placeholder='Full Name'/>
                <input type='email' name='email' placeholder='Email'/>
                <input type="text" name="college"  placeholder='College'/>
                <input type="number" name="matricNumber" placeholder='Matric Number' />
                <input type="text" name="department" placeholder='Department'/>

                <input type="button" value="Create Profile" />
            </form>



        </div>
    )

}

export default Register