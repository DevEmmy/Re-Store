import React from 'react'

function AddFileBox() {
  return (
    <div className='add_file_box'>
            <form action="">
                <input type="text" name="titile" placeholder='Add File Titile' />
                <input type="file" name="file"  className='upload-btn'/>
                <input type="button" value="Upload File" />
            </form>

    </div>
  )
}

export default AddFileBox