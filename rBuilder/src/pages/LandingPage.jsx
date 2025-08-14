import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <>
      <section id="part1" className='container-fluid w-full h-100' style={
        {
          backgroundImage: "url('https://www.shutterstock.com/image-photo/multiethnic-office-conference-room-indian-260nw-2101931002.jpg')",
          backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", backgroundPosition: "top",
          height:"80vh"
        }}>
        <div className="row py-5">
          <div className="col-12 col-md-4"></div>
          <div className="col-12 col-md-4 border rounded p-5 shadow-lg text-center"
            style={{ backgroundColor: "rgb(255,255,255,0.2)" }}>
            <h3>Designed to get hired</h3>
            <h4>Your skills, your story, your next job - all in one</h4>
            <Link to={'/ResumeGen'}>
              <button className='btn btn-primary'>Make your Resume</button>
            </Link>
          </div>
          <div className="col-12 col-md-4"></div>
        </div>
      </section>

      <section id="part2" className="container-fluid tools p-5">
        <h1 className='text-center'>Tools</h1>
        <div className="row">
          <div className="tools-content col-12 col-md-6 p-5">
            <h4>Resume</h4>
            <h6>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h6>
            <h4>Cover Letters</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <h4>Jobs</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <h4>Applications</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

          </div>
          <div className="tools-img col-12 col-md-6">
            <img src="https://cdn-images.zety.com/images/zety/landings/builder/in/resume-builder-template@3x.png"
              alt="tools-img" className='img-fluid w-75 ms-5' />
          </div>
        </div>
      </section>

      <section id="part3" className='container-fluid w-100'
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?cs=srgb&dl=pexels-fauxels-3184291.jpg&fm=jpg')",
          backgroundSize: "cover", backgroundAttachment: "fixed", backgroundPosition: "top", height:"80vh"
        }}>
      </section>

      <section id="part4" className='container my-5'>
        <h1 className='text-center'>Testimonials</h1>
        <div className="row align-items-center">
          <div className="content col-12 col-md-6">
            <h4 className='fw-bold'>Trusted by Proffessionals worldwide</h4>
            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda delectus numquam magnam, maiores alias id nisi excepturi consequatur aliquid ab! Animi eum, dolorem reiciendis cumque facere minus sunt perferendis cum?</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda delectus numquam magnam, maiores alias </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda delectus numquam magnam, maiores alias </p>
          </div>
          <div className="test-imgs col-12 col-md-6 my-3">
            <div className="row">
              <div className="col-3">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="user1" className='w-100' />
              </div>
              <div className="col-3">
                <img src="https://cdn.prod.website-files.com/6600e1eab90de089c2d9c9cd/662c092880a6d18c31995dfd_66236531e8288ee0657ae7a7_Business%2520Professional.webp"
                  alt="user1" className='w-100 h-100' />
              </div>
              <div className="col-3">
                <img src="https://www.mycashflow.online/cdn/assets/pages/media/profile/profile_user.jpg"
                  alt="user1" className='w-100' />
              </div>
              <div className="col-3">
                <img src="https://image.cdn2.seaart.me/static/upload/20241129/0ccd5f1e-ffd3-414e-a11c-5ba6d459fb64.png"
                  alt="user1" className='w-100' />
              </div>
            </div>
            <div className="row my-2">
              <div className="col-3">
                <img src="https://cdn.basedlabs.ai/c2e017a9-bb41-46e8-aa61-242163b58127"
                  alt="user1" className='w-100' />
              </div> 
              <div className="col-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwBEo_gI_xDdOCnZ4IxP8DKh4oASlWPBmqm63bfOJKAXmOV9kH1_UvqYHZuVD-ikweP_k&usqp=CAU"
                  alt="user1" className='w-100 h-100' />
              </div>
              <div className="col-3">
                <img src="https://imgcdn.stablediffusionweb.com/2024/5/16/7bdb6f98-8507-42ea-a278-de2084b72b70.jpg" alt="" className='w-100 h-100'/>
              </div>
              <div className="col-3">
                <img src="https://www.realfakephotos.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgonca-result.9c196cb2.jpeg&w=2048&q=75"
                  alt="user1" className='w-100' />
              </div> 
                         
            </div>
            <div className="row my-2">
              <div className="col-3">
                <img src="https://imgcdn.stablediffusionweb.com/2024/4/18/c7fa62e5-b38b-47cb-8b46-bf2abd870d50.jpg"
                  alt="user1" className='w-100 h-100' />
              </div>
              <div className="col-3">
                <img src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ="
                  alt="user1" className='w-100 h-100' />
              </div>
              <div className="col-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhAu72pB24JrKJpqABtlUUqV02c4W-BaPyBQ&s"
                  alt="user1" className='w-100 h-100' />
              </div> 
              <div className="col-3">
                <img src="https://www.aiworkphoto.com/images/team-2.png"
                  alt="user1" className='w-100 h-100' />
              </div>
              
              
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default LandingPage
