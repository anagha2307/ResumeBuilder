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

function Edit() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>

                        <h5>Personal Details</h5>
                        <div className="d-flex row ms-1">
                            <TextField id="name" label="Full Name" variant="standard" />
                            <TextField id="job" label="Job Title" variant="standard" />
                            <TextField id="loc" label="Location" variant="standard" />
                        </div>
                        <h5 className='mt-4'>Contact Details</h5>
                        <div className="d-flex row ms-1">
                            <TextField id="email" label="Email" variant="standard" />
                            <TextField id="phone" label="Phone" variant="standard" />
                            <TextField id="git" label="Github Profile Link" variant="standard" />
                            <TextField id="git" label="LinkedIn Profile Link" variant="standard" />
                            <TextField id="portfolio" label="Portfolio Link" variant="standard" />
                        </div>
                        <h5 className='mt-4'>Education Details</h5>
                        <div className="d-flex row ms-1">
                            <TextField id="course" label="Course" variant="standard" />
                            <TextField id="college" label="College" variant="standard" />
                            <TextField id="uni" label="University" variant="standard" />
                            <TextField id="year" label="Year of Passing" variant="standard" />
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
                            <TextField id="name" label="Write a short summary of yourself" variant="standard" multiline rows={4} />
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default Edit
