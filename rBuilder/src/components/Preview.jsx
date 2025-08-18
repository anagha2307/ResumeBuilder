import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {Link} from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { IoIosDownload } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import Edit from './Edit'

function Preview() {
  return (
    <>
      <Stack direction={'row'} sx={{justifyContent:'flex-end'}}>
        <Stack direction={'row'}>
          {/*download*/}
          <button className='btn fs-2 text-primary'><IoIosDownload /></button>
          {/*edit*/}
          <Edit/>
          {/*history*/}
          <button className='btn fs-3 text-primary'><FaHistory /></button>
          <Link to={'/resume'} className='btn text-primary my-3'>BACK</Link>
        </Stack>
      </Stack>
      <Box component="section" sx={{ p: 2,textAlign: "center"}}>
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
