import React from 'react'
import { IoDocumentText } from "react-icons/io5";
import { IoDownloadSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

function ResumeGen() {
  return (
    <div className='container-fluid mt-3'>
      <div className="row justify-content-center align-items-center text-center" style={{height:"75vh"}}>
        <h1 className='mt-3'>Create a job-winning resume in minutes</h1>
        <div className="col-4 border shadow rounded text-center p-5 my-5">
          <IoDocumentText className='fs-1 text-primary mb-3'/>
          <h4>Add your information</h4>
          <h5>Add pre-written examples to each section</h5>
          <h5>Step 1</h5>
        </div>
        <div className="col-1"></div>
        <div className="col-4 border shadow text-center p-5">
          <IoDownloadSharp className='fs-1 text-danger mb-3'/>
          <h4>Download your Resume</h4>
          <h5>Download and start applying</h5>
          <h5>Step 2</h5>
        </div>
        <div className="mb-5">
          <Link to = {'/UserForm'}>
            <button className="btn btn-primary px-4">Let's Start</button>
          </Link>          
        </div>
      </div>      
    </div>
  )
}

export default ResumeGen
