import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { MdDelete } from "react-icons/md";
function History() {
  return (
    <div id='history'>
      <div>
        <h2 className='text-center my-2'>Resume Download History</h2>
      </div>
      <Box component="section" className='container-fluid'>
        <div className="row">
          <div className="col-md-4">         
            <Paper elevation={3} sx={{ textAlign: 'center', my: 5, p: 5 }}>
              <div className="d-flex justify-content-evenly align-items-center">
              <h6>Review At: <br/> 24/07/25 7.00 PM</h6>
              <button className="btn text-danger fs-5"><MdDelete /></button>
            </div>
              <div className='border rounded p-3'>
                <h1>Name</h1>
                <h6>Job Title</h6>
                <p><span>Location</span> | <span>Email</span> | <span>Phone</span></p>
                <p>
                  <Link href={""}>GITHUB</Link> |
                  <Link href={""}>LINKEDIN</Link> |
                  <Link href={""}>PORTFOLIO</Link>
                </p>
                <Divider sx={{ fontSize: "25px" }}>Summary</Divider>
                <p className='fs-5 ms-3'>User summary</p>
                <Divider sx={{ fontSize: "25px", marginBottom: "10px" }}>Education</Divider>
                <h5>User Education</h5>
                <p><span>College</span> | <span>University</span> | <span>Year</span></p>
                <Divider sx={{ fontSize: "25px", marginBottom: "10px" }}>Professional Experience</Divider>
                <p><span>Company</span> | <span>Location</span> | <span>Duration</span></p>
                <Divider sx={{ fontSize: "25px", marginBottom: "10px" }}>Skills</Divider>
                <Stack direction="row" justifyContent={'space-evenly'} sx={{ flexWrap: "wrap" }}>
                  <Button variant="contained" sx={{ marginBottom: "10px" }}>User Skill</Button>
                  <Button variant="contained" sx={{ marginBottom: "10px" }}>User Skill</Button>
                  <Button variant="contained" sx={{ marginBottom: "10px" }}>User Skill</Button>
                  <Button variant="contained" sx={{ marginBottom: "10px" }}>User Skill</Button>
                  <Button variant="contained" sx={{ marginBottom: "10px" }}>User Skill</Button>
                  <Button variant="contained" sx={{ marginBottom: "10px" }}>User Skill</Button>
                  <Button variant="contained" sx={{ marginBottom: "10px" }}>User Skill</Button>
                  <Button variant="contained" sx={{ marginBottom: "10px" }}>User Skill</Button>
                  <Button variant="contained" sx={{ marginBottom: "10px" }}>User Skill</Button>
                </Stack>
          </div>
          </Paper>

        </div>
    </div>

      </Box >



    </div >
  )
}

export default History
