import React from 'react'
import Profile from './Profile'

function HomePage() {
  return (
    <div className='homepage_layout'>

        <Profile />
        <div className="pages">
            <div className="page_component page_1">
                <h3>My Receipts</h3>
            </div>

            <div className="page_component page_2">
                <h3>Upload Exam Pass</h3>
            </div>

            <div className="page_component page_3">
                <h3>Stamp Receipts</h3>
            </div>
        </div>

    </div>
  )
}

export default HomePage