import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { IoIosDownload } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import Edit from './Edit'

function Preview({ userInput }) {
  return (
    <>
      {
        userInput.personalData.name != "" &&
        <>
          <Stack direction={'row'} sx={{ justifyContent: 'flex-end' }}>
            <Stack direction={'row'}>
              {/*download*/}
              <button className='btn fs-2 text-primary'><IoIosDownload /></button>
              {/*edit*/}
              <Edit />
              {/*history*/}
              <button className='btn fs-3 text-primary'> <FaHistory /></button>
              <Link to={'/resume'} className='btn text-primary my-3'>BACK</Link>
            </Stack>
          </Stack>
          <Box component="section" sx={{ p: 2, textAlign: "center" }}>
            <Paper elevation={3}>
              <h2>{userInput.personalData.name}</h2>
              <h6>{userInput.personalData.jobTitle}</h6>
              <p><span>{userInput.personalData.location}</span> |
                <span>{userInput.personalData.email}</span> | <span>{userInput.personalData.phone}</span></p>
              <p>
                <Link href={userInput.personalData.github}>GITHUB</Link> |
                <Link href={userInput.personalData.linkedin}>LINKEDIN</Link> |
                <Link href={userInput.personalData.portfolio}>PORTFOLIO</Link>
              </p>
              <Divider sx={{ fontSize: "25px" }}>Summary</Divider>
              <p className='fs-5 ms-3'>{userInput.summary}</p>
              <Divider sx={{ fontSize: "25px", marginBottom: "10px" }}>Education</Divider>
              <h5>{userInput.educationData.course}</h5>
              <p><span>{userInput.educationData.college}</span> |
                <span>{userInput.educationData.university}</span> |
                <span>{userInput.educationData.year}</span>
              </p>
              <Divider sx={{ fontSize: "25px", marginBottom: "10px" }}>Professional Experience</Divider>
              <h5>{userInput.experience.jobRole}</h5>
              <p>
                <span>{userInput.experience.company}</span> |
                <span>{userInput.experience.jobLocation}</span> |
                <span>{userInput.experience.duration}</span>
              </p>
              <Divider sx={{ fontSize: "25px", marginBottom: "10px" }}>Skills</Divider>
              <Stack direction="row" justifyContent={'space-evenly'} sx={{ flexWrap: "wrap" }}>
                {
                  userInput.skills?.map(skill => (
                    <Button variant="contained" sx={{ marginBottom: "10px" }}>{skill}</Button>
                  ))
                }
              </Stack>
            </Paper>
          </Box>
        </>
      }
    </>
  )
}

export default Preview
