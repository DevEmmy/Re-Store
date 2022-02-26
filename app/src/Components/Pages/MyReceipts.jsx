import React, { useState } from 'react'
import AddFileBox from '../AddFileBox'
import Profile from '../Profile'

function MyReceipts() {
  const [addFile, setAddFile] = useState(false)

  
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

      <div className="add_file_box_compo">
        { addFile && <AddFileBox />}
      </div>

      <div className="add_icon" onClick={()=>setAddFile(!addFile)}>
        +
      </div>
    </div>
  )
}

export default MyReceipts