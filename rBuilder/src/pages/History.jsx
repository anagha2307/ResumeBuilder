import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { MdDelete } from "react-icons/md";
import { deleteHistoryAPI, getHistoryAPI } from '../services/allAPI';

function History() {
  const [resume, setResume] = useState([])

  useEffect(() => {
    getHistory()
  }, [resume])

  const getHistory = async () => {
    try {
      const result = await getHistoryAPI()
      //console.log(result);
      setResume(result.data)
    }
    catch (err) {
      console.log(err);

    }
  }
  //console.log(resume);
  
  const handleRemoveHistory = async (id) => {
    try {
      await deleteHistoryAPI(id);
      getHistory()
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div id='history'>
      <div className='d-flex flex-column'>
        <h2 className='text-center font-bold my-3'>Resume Download History</h2>
        {/* back */}
        <Link to={'/UserForm'} className='btn text-primary text-end my-3'>BACK</Link>
      </div>
      <Box component="section" className='container-fluid'>
        <div className="row">
          {
            resume.length > 0 ?
              resume?.map((item, index) => (
                <div key={index} className="col-md-4">
                  <Paper elevation={3} sx={{ textAlign: 'center', my: 5, p: 5 ,width:'400px'}}>
                    <div className="d-flex justify-content-evenly align-items-center">
                      <h6>Review At: <br /> {item?.timeStamp}</h6>
                      <button onClick={() => handleRemoveHistory(item?.id)} className="btn text-danger fs-5"><MdDelete /></button>
                    </div>
                    <div className='border rounded p-3'>
                      <img src={item?.imgURL} className='img-fluid' alt="resume" />
                    </div>
                  </Paper>
                </div>
              ))
              :
              <p>History is Unavailable!!!</p>
          }
        </div>
      </Box >



    </div >
  )
}

export default History
