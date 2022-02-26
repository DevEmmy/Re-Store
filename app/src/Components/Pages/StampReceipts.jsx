import React, { useState, useRef } from 'react'
import AddFileBox from '../AddFileBox'
import { Document, Page } from 'react-pdf';

function StampReceipts() {
  const [addFile, setAddFile] = useState(false)
  const doc = useRef(null)
  const [ file, setFile] = useState(false)

  return (
    <div className='stamp_receipt_page'>
        <h3>Stamp Receipt</h3>

        <div className="uploaded_document" onClick={()=>setAddFile(!addFile)}>
           

            { file ? <Document file={ doc.current.value } ></Document> :  <h1 className="text_indicating_add">
              Tap to Add File
            </h1>}
        </div>


       
      <div className="add_file_box_compo">
        { addFile &&     <div className='add_file_box'>
                            <form action="">
                                <input type="text" name="titile" placeholder='Add File Titile' />

                                <input type="file" name="file"  className='upload-btn'/>

                                <input type="button" value="Upload File" ref={doc}/>
                            </form>

                          </div>}
      </div>


    <div className="add_icon" onClick={()=>setAddFile(!addFile)}>
        +
      </div>
    </div>
  )
}

export default StampReceipts