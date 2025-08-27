import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { IoIosDownload } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import Edit from './Edit';

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { addDownloadHistoryAPI } from '../services/allAPI';

function Preview({ userInput, finish,resumeId }) {
  const [downloadStatus, setDownloadStatus] = useState(false)


  const downloadCV = async () => {
    //get element for taking screenshot
    const input = document.getElementById("result")
    const canvas = await html2canvas(input, { scale: 2 })
    const imgURL = canvas.toDataURL('image/png')
    //console.log(imgURL);
    const pdf = new jsPDF()
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width; // keep ratio
    pdf.addImage(imgURL, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save('resume.pdf')
    //get date
    const localTimeData = new Date()
    const timeStamp = `${localTimeData.toLocaleDateString()},${localTimeData.toLocaleTimeString()}`
    //console.log(timeStamp);
    //add download cv to json using api call
    try {
      const result = await addDownloadHistoryAPI({ ...userInput, imgURL, timeStamp })
      console.log(result);
      setDownloadStatus(true)
    } catch (err) {
      console.log(err);

    }

  }
  return (
    <>
      {
        userInput.personalData.name != "" &&
        <div className="d-flex flex-column justify-content-center align-items-center">
          {finish &&
            <Stack direction={'row'} sx={{ justifyContent: 'flex-end' }}>
              <Stack direction={'row'}>
                {/*download*/}
                <button onClick={downloadCV} className='btn fs-2 text-primary'><IoIosDownload /></button>
                  {/*edit*/}
                    <Edit resumeId={resumeId} />
                  {
                  downloadStatus &&
                  <>
                    {/*history*/}
                    <Link to="/history" className="btn fs-3 text-primary my-2">
                      <FaHistory />
                    </Link>
                  </>
                }
                {/* back */}
                <Link to={'/resume'} className='btn text-primary my-3'>BACK</Link>
              </Stack>
            </Stack>
          }

          <Box component="section" >
            <Paper id="result" elevation={3} sx={{ p: 5, textAlign: "center", marginTop: '80px', width: '500px', mx: 5 }}>
              <h2>{userInput.personalData.name}</h2>
              <h6>{userInput.personalData.jobTitle}</h6>
              <p><span>{userInput.personalData.location}</span> |
                <span>{userInput.personalData.email}</span> | <span>{userInput.personalData.phone}</span></p>
              <p>
                <Link href={userInput.personalData.github}>GITHUB</Link> |
                <Link href={userInput.personalData.linkedin}>LINKEDIN</Link> |
                <Link href={userInput.personalData.portfolio}>PORTFOLIO</Link>
              </p>
              <Divider sx={{ fontSize: "25px",textAlign:'justify' }}>Summary</Divider>
              <p className='fs-5 ms-3'>{userInput.summary}</p>
              <Divider sx={{ fontSize: "25px", marginBottom: "10px" }}>Education</Divider>
              <h5>{userInput.educationData.course}</h5>
              <p>
                <span>{userInput.educationData.college}</span> |
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
                  userInput.skills?.map((skill, index) => (
                    <Button key={index} variant="contained" sx={{ marginBottom: "10px" }}>{skill}</Button>
                  ))
                }
              </Stack>
            </Paper>
          </Box>
        </div>
      }
    </>
  )
}

export default Preview
