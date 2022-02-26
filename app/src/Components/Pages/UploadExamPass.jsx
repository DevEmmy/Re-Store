import React, { useState } from 'react'
import Profile from '../Profile'
import AddFileBox from '../AddFileBox'

function UploadExamPass() {
  const [addFile, setAddFile] = useState(false)


  return (
    <div className='exam_pass'>
      <Profile />

      <div className="lists_of_exam_pass">
        <div className="pass">
          <h3>First Semester 100L</h3>
        </div>

        <div className="pass">
        <h3>Seconf Semester 100L </h3>
        </div>

        <div className="pass">
        <h3>First Semester 200L</h3>
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

export default UploadExamPass