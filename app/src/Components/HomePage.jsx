import React from 'react'
import Profile from './Profile'
import {
    Link
  } from 'react-router-dom'

function HomePage() {
  return (
    <div className='homepage_layout'>

        <Profile />
        <div className="pages">

            <Link to='/my-receipts'>
                <div className="page_component page_1">
                    <h3>My Receipts</h3>
                </div>
            </Link>
            
            <Link to='/upload-exam-pass'>
                <div className="page_component page_2">
                    <h3>Upload Exam Pass</h3>
                </div>
            </Link>

            <Link to='/stamp-receipts'>
            <div className="page_component page_3">
                <h3>Stamp Receipts</h3>
            </div>
            </Link>
        </div>

    </div>
  )
}

export default HomePage