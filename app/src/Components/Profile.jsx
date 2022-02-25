import React from 'react'
import  img from './img.jpg'

function Profile() {
  return (
    <div className='profile_head'>

        <div className="profile_container">
            <div className="profile_img_container">
              <img src={img} alt="" />
            </div>

            <div className="profile_text_area">
              <h3>Name : Emmy</h3>
              <h3>Email : eolaosebikan60@gmail.com</h3>
              <h3>Matric Number : 20501222</h3>
              <h3>Department : ELE</h3>
              <h3>College : COLENG </h3>
            </div>
        </div>
    </div>
  )
}

export default Profile