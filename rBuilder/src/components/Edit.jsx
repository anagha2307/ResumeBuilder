import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MdEditDocument } from "react-icons/md";
import TextField from '@mui/material/TextField';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxHeight: '80vh',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto'
};

function Edit({ resumeId}) {
    const [userInput, setUserInput] = React.useState({})
    const [open, setOpen] = React.useState(false);
    //console.log(resumeId);
    console.log(userInput);

    React.useEffect(() => {
        resumeId && getEditResumeDetails()
    }, [resumeId])

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const getEditResumeDetails = async () => {

    }
    return (
        <div>
            <button onClick={handleOpen} className='btn fs-3 text-primary my-2'><MdEditDocument /></button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Details
                    </Typography>
                    <Typography id="modal-modal-description" component="div" sx={{ mt: 2 }}>
                        <h5>Personal Details</h5>
                        <div className="d-flex row ms-1">
                            <TextField id="name" label="Full Name" variant="standard"
                                onChange={e => setUserInput(
                                    {
                                        ...userInput, personalData: { ...userInput.personalData, name: e.target.value }
                                    })}
                                value={userInput?.personalData?.name} />
                            <TextField id="job" label="Job Title" variant="standard"
                                onChange={e => setUserInput(
                                    { ...userInput, personalData: { ...userInput.personalData, jobTitle: e.target.value } })}
                                value={userInput?.personalData?.jobTitle} />
                            <TextField id="loc" label="Location" variant="standard"
                                onChange={e => setUserInput(
                                    {
                                        ...userInput, personalData: { ...userInput.personalData, location: e.target.value }
                                    })}
                                value={userInput?.personalData?.location} />
                        </div>
                        <h5 className='mt-4'>Contact Details</h5>
                        <div className="d-flex row ms-1">
                        </div>
                        <h5 className='mt-4'>Education Details</h5>
                        <div className="d-flex row ms-1">

                        </div>
                        <h5 className='mt-4'>Professional Details</h5>
                        <div className="d-flex row ms-1">
                            <TextField id="title" label="Job or Internship" variant="standard" />
                            <TextField id="company" label="Company" variant="standard" />
                            <TextField id="location" label="Company Location" variant="standard" />
                            <TextField id="duration" label="Duration" variant="standard" />
                        </div>
                        <h5 className='mt-4'>Skills</h5>
                        <div className='d-flex justify-content-between align-items-center ms-1'>
                            <TextField sx={{ width: "400px" }} id="skill" label="Add Skill" variant="standard" />
                            <Button variant="text">ADD</Button>
                        </div>
                        <h5 className='my-3'>Added Skills:</h5>
                        <div className="d-flex flex-wrap jusify-content-between my-3 gap-3">
                            {/*span duplicated according user adding skills*/}
                            <span className="btn btn-outline-primary">REACT <button className="btn btn-close"></button></span>
                        </div>
                        <h5 className='mt-4'>Professional Summary</h5>
                        <div className="d-flex row ms-1">
                            <TextField id="summary" label="Write a short summary of yourself" variant="standard" multiline rows={4} />
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default Edit
