import React from 'react'
import Profile from '../Profile'

function MyReceipts() {
  return (
    <div className='receipts_page'>
      <Profile />

      <div className="lists_of_receipts">
        <div className="receipt">
          <h3>Acceptance Fee </h3>
        </div>

        <div className="receipt">
        <h3>College </h3>
        </div>

        <div className="receipt">
        <h3>School Fee </h3>
        </div>
      </div>

      <div className="add_icon">
        +
      </div>
    </div>
  )
}

export default MyReceipts