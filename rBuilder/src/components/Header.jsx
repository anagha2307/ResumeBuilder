import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {Link} from 'react-router-dom';


function Header() {
  const about = "A Resume Builder App is an essential tool for job seekers looking to create polished and effective resumes. By combining ease of use with professional design options, these apps empower users to present their qualifications confidently and increase their chances of landing job interviews."
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </IconButton>
            <img src="./src/assets/resume_icon.png" alt="icon" width="40px" />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontWeight: '600', fontFamily: "Playfair Display" }} className='text-light'>
              Resume Builder
            </Typography>      
          <Tooltip title={about}>
              <Button sx={{ fontWeight: '600', fontFamily: "Playfair Display" }} color="inherit" 
              className='justify-content-end text-light'>About Us</Button>
          </Tooltip>
          
          
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
