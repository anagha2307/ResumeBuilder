import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {Link} from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Preview() {
  return (
    <>
      <Box component="section" sx={{ p: 2,textAlign: "center",marginTop:"100px"}}>
      <Paper elevation={3}>
        <h1>Name</h1>
        <h6>Job Title</h6>
        <p><span>Location</span> | <span>Email</span> | <span>Phone</span></p>
        <p>
            <Link href={""}>GITHUB</Link> | 
            <Link href={""}>LINKEDIN</Link> | 
            <Link href={""}>PORTFOLIO</Link> 
        </p>
        <Divider sx={{fontSize : "25px"}}>Summary</Divider>
        <p className='fs-5 ms-3'>User summary</p>
        <Divider sx={{fontSize : "25px", marginBottom: "10px"}}>Education</Divider>
        <h5>User Education</h5>
        <p><span>College</span> | <span>University</span> | <span>Year</span></p>
        <Divider sx={{fontSize : "25px", marginBottom: "10px"}}>Professional Experience</Divider>
        <p><span>Company</span> | <span>Location</span> | <span>Duration</span></p>
        <Divider sx={{fontSize : "25px", marginBottom: "10px"}}>Skills</Divider>
        <Stack direction="row" justifyContent={'space-evenly'} sx={{flexWrap: "wrap"}}>
          <Button variant="contained" sx={{marginBottom:"10px"}}>User Skill</Button>          
          <Button variant="contained" sx={{marginBottom:"10px"}}>User Skill</Button>          
          <Button variant="contained" sx={{marginBottom:"10px"}}>User Skill</Button> 
          <Button variant="contained" sx={{marginBottom:"10px"}}>User Skill</Button>          
          <Button variant="contained" sx={{marginBottom:"10px"}}>User Skill</Button>          
          <Button variant="contained" sx={{marginBottom:"10px"}}>User Skill</Button> 
          <Button variant="contained" sx={{marginBottom:"10px"}}>User Skill</Button>          
          <Button variant="contained" sx={{marginBottom:"10px"}}>User Skill</Button>          
          <Button variant="contained" sx={{marginBottom:"10px"}}>User Skill</Button>          
        </Stack>
      </Paper>
    </Box>
    </>
  )
}

export default Preview
