import React from 'react'
import Profile from './Profile'

function HomePage() {
  return (
    <div className='homepage_layout'>

        <Profile />
        <div className="pages">
            <div className="page_component">
                <h3>My Receipts</h3>
            </div>

            <div className="page_component">
                <h3>Upload Exam Pass</h3>
            </div>

            <div className="page_component">
                <h3>Stamp Receipts</h3>
            </div>
        </div>

    </div>
  )
}

export default HomePage