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
  }, [])


  const getHistory = async () => {
    try {
      const result = await getHistoryAPI()
      console.log(result);
      setResume(result.data)
    }
    catch (err) {
      console.log(err);

    }
  }
  const handleDelete = async (id) => {
    try {
      const res = await deleteHistoryAPI(id);
      setResume(resume.filter(item => item.id !== id));
    } catch (err) {
      console.error("Error deleting item:", err);
    }
  };

  return (
    <div id='history'>
      <div>
        <h2 className='text-center my-2'>Resume Download History</h2>
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
                      <button onClick={() => handleDelete(item.id)} className="btn text-danger fs-5"><MdDelete /></button>
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
