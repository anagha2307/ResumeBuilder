import React from 'react'
import Steps from '../components/Steps'
import Preview from '../components/Preview'
import { useState } from 'react'




function UserForm() {
  //state for storing user input
  const [userInput, setUserInput] = React.useState({
    personalData: {
      name: '',
      jobTitle: '',
      location: '',
      email: '',
      phone: '',
      github: '',
      linkedin: '',
      portfolio: '',
    },
    educationData: {
      course: '',
      college: '',
      university: '',
      year: ''
    },
    experience: {
      jobRole: '',
      company: '',
      jobLocation: '',
      duration: ''
    },
    skills: [],
    summary: ''

  })
  //state for finish
  const [finish, setFinish] = useState(false)
  //state for storing id of created resume
  const [resumeId,setResumeId] = useState("") 
  return (
    <>
      {
        finish ? 
          <div className="flex justify-content-center align-items-center">
            <Preview resumeId={resumeId} userInput={userInput} finish={finish} />
          </div>
          :
          <div className="container ">
            <div className="row p-5 gap-6">
              <div className="col-lg-6">
                <Steps setResumeId={setResumeId} userInput={userInput} setUserInput={setUserInput}
                  setFinish={setFinish} />
              </div>
              <div className="col-lg-6">
                <Preview userInput={userInput} />
              </div>
            </div>
          </div>

      }


    </>
  )
}

export default UserForm
