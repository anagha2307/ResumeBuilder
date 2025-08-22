import React from 'react'
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useState, useRef } from 'react';
import swal from 'sweetalert';


const steps = ['Basic Information', 'Contact Details', 'Education Details', 'Work Experience',
  'Skills & Certifications', 'Review & submit'];

function Steps({ userInput, setUserInput, setFinish}) {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  const skillSuggestion = ['NODE JS', 'EXPRESS', 'REACT', 'MONGODB', 'GIT', 'BOOTSTRAP', 'NEXT JS', 'TAILWIND CSS']
  const userSkillRef = useRef()

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  const addSkill = (inputSkill) => {
    if (inputSkill) {
      if (userInput.skills.includes(inputSkill)) {
        alert('Given skill already exists!');
      } else {
        setUserInput(prev => ({
          ...prev, skills: [...prev.skills, inputSkill]
        }));
      }
    }
  };
  const removeSkill = (skill) => {
    setUserInput({ ...userInput, skills: userInput.skills.filter((item) => item != skill) })
  }
  //render the content corresponding to the array index
  const renderStepArrayContent = (stepCount) => {
    switch (stepCount) {
      case 0: return (
        <div>
          <h4>Personal Details</h4>
          <div className="d-flex row ms-1">
            <TextField id="name" label="Full Name" variant="standard" onChange={e => setUserInput
              ({ ...userInput, personalData: { ...userInput.personalData, name: e.target.value } })}
              value={userInput.personalData.name} />
            <TextField id="job" label="Job Title" variant="standard" onChange={e => setUserInput
              ({ ...userInput, personalData: { ...userInput.personalData, jobTitle: e.target.value } })}
              value={userInput.personalData.jobTitle} />
            <TextField id="loc" label="Location" variant="standard" onChange={e => setUserInput
              ({ ...userInput, personalData: { ...userInput.personalData, location: e.target.value } })}
              value={userInput.personalData.location} />
          </div>
        </div>
      )
      case 1: return (
        <div>
          <h4>Contact Details</h4>
          <div className="d-flex row ms-1">
            <TextField id="email" label="Email" variant="standard" onChange={e => setUserInput
              ({ ...userInput, personalData: { ...userInput.personalData, email: e.target.value } }
              )}
              value={userInput.personalData.email} />
            <TextField id="phone" label="Phone" variant="standard" onChange={e => setUserInput
              ({ ...userInput, personalData: { ...userInput.personalData, phone: e.target.value } }
              )}
              value={userInput.personalData.phone} />
            <TextField id="git" label="Github Profile Link" variant="standard" onChange={e => setUserInput
              ({ ...userInput, personalData: { ...userInput.personalData, github: e.target.value } }
              )}
              value={userInput.personalData.github} />
            <TextField id="linkedin" label="LinkedIn Profile Link" variant="standard"
              onChange={e => setUserInput
                ({ ...userInput, personalData: { ...userInput.personalData, linkedin: e.target.value } }
                )}
              value={userInput.personalData.linkedin} />
            <TextField id="portfolio" label="Portfolio Link" variant="standard"
              onChange={e => setUserInput
                ({ ...userInput, personalData: { ...userInput.personalData, portfolio: e.target.value } }
                )}
              value={userInput.personalData.portfolio} />
          </div>
        </div>
      )
      case 2: return (
        <div>
          <h4>Education Details</h4>
          <div className="d-flex row ms-1">
            <TextField id="course" label="Course" variant="standard"
              onChange={e => setUserInput
                ({ ...userInput, educationData: { ...userInput.educationData, course: e.target.value } }
                )}
              value={userInput.educationData.course} />
            <TextField id="college" label="College" variant="standard"
              onChange={e => setUserInput
                ({ ...userInput, educationData: { ...userInput.educationData, college: e.target.value } }
                )}
              value={userInput.educationData.college} />
            <TextField id="uni" label="University" variant="standard"
              onChange={e => setUserInput
                ({ ...userInput, educationData: { ...userInput.educationData, university: e.target.value } }
                )}
              value={userInput.educationData.university} />
            <TextField id="year" label="Year of Passing" variant="standard"
              onChange={e => setUserInput
                ({ ...userInput, educationData: { ...userInput.educationData, year: e.target.value } }
                )}
              value={userInput.educationData.year} />
          </div>
        </div>
      )
      case 3: return (
        <div>
          <h4>Professional Details</h4>
          <div className="d-flex row ms-1">
            <TextField id="title" label="Job or Internship" variant="standard"
              onChange={e => setUserInput
                ({ ...userInput, experience: { ...userInput.experience, jobRole: e.target.value } }
                )}
              value={userInput.experience.jobRole} />
            <TextField id="company" label="Company" variant="standard"
              onChange={e => setUserInput
                ({ ...userInput, experience: { ...userInput.experience, company: e.target.value } }
                )}
              value={userInput.experience.company} />
            <TextField id="location" label="Company Location" variant="standard"
              onChange={e => setUserInput
                ({ ...userInput, experience: { ...userInput.experience, jobLocation: e.target.value } }
                )}
              value={userInput.experience.jobLocation} />
            <TextField id="duration" label="Duration" variant="standard"
              onChange={e => setUserInput
                ({ ...userInput, experience: { ...userInput.experience, duration: e.target.value } }
                )}
              value={userInput.experience.duration} />
          </div>
        </div>
      )
      case 4: return (
        <div>
          <h3>Skills</h3>
          <div className='d-flex justify-content-between align-items-center ms-1'>
            <input ref={userSkillRef} type="text" className="form-control" placeholder='Add Skills' />
            <Button variant="text" onClick={() => addSkill(userSkillRef.current.value)}>ADD</Button>
          </div>
          <h5 className='my-3'>Suggestions:</h5>
          <div className="d-flex flex-wrap jusify-content-between my-3">
            {skillSuggestion.map(userskill => (
              <Button variant="outlined"
                onClick={() => addSkill(userskill)}
                className='m-1'
                key={userskill}>{userskill}
              </Button>
            ))}
          </div>
          <h5 className='my-3'>Added Skills:</h5>
          <div className="d-flex flex-wrap jusify-content-between my-3 gap-3">
            {/*span duplicated according user adding skills*/}
            {
              userInput.skills.length > 0 ?
                userInput.skills.map(skill => (
                  <span className="btn btn-primary">{skill}
                    <button className="btn text-light" onClick={() => removeSkill(skill)}>X</button></span>
                )) :
                <span>NIL</span>
            }
          </div>
        </div>
      )
      case 5: return (
        <div>
          <h4>Professional Summary</h4>
          <div className="d-flex row ms-1">
            <TextField id="name" label="Write a short summary of yourself" variant="standard" multiline rows={4}
              onChange={(e) =>
                setUserInput({ ...userInput, summary: e.target.value })
              }
              value={userInput.summary} />
          </div>
        </div>
      )
    }
  }
  const handleAddResume = async() =>{
      //alert("API called")
      //api call
      const {name,jobTitle,location} = userInput.personalData
      if(name && jobTitle && location){
          try{
            const result = await addResumeAPI(userInput)
            console.log("API result:", result);
            swal("Success!","Resume added succesfully!","success")
            setFinish(true)
          }
          catch(err){
            console.log(err);
            swal("Error!","Resume add Failed!","error")
            setFinish(false)      
          }
      }
      else{
        alert("fill the form")
      }
  }

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography component="div" sx={{ mt: 2, mb: 1 }}>
              Step {activeStep + 1}
              <Box sx={{ mt: 2 }}>
                {renderStepArrayContent(activeStep)}
              </Box>
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}
              {
                activeStep === steps.length - 1 ?
              <Button onClick={handleAddResume}>Finish</Button>:
              <Button onClick={handleNext}>Next</Button>
              }
              
            </Box>
          </React.Fragment>
        )}
      </Box>
    </>
  )
}

export default Steps
