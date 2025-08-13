import React from 'react'
import { IoMdMail } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div style={{height:'280px' , backgroundColor:'purple', marginBottom:"0px"}} 
    className='container-fluid text-center text-light'>
      <h2 className='p-4'>Contact Us</h2>         
      <h5> <IoMdMail />   rBuilder@gmail.com</h5>
      <h5> <IoPhonePortraitOutline />   9876543210</h5>
      <h5 className='mt-3'>Connect with Us</h5>   
      <div className="d-flex justify-content-center align-items-center ">
          <FaFacebook className='me-3' />
          <FaInstagram className='me-3'/>
          <FaLinkedinIn />
      </div>  
      <h4 className='mt-3'>Made with ❤️ using React</h4>
    </div>
  )
}

export default Footer
