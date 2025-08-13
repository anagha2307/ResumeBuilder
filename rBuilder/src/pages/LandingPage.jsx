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
            <Link to={'/resume'}>
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
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
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
            <h4>Trusted by Proffessionals worldwide</h4>
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
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="user1" className='w-100' />
              </div>
              <div className="col-3">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="user1" className='w-100' />
              </div>
              <div className="col-3">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="user1" className='w-100' />
              </div>
              
            </div>
            <div className="row my-2">
              <div className="col-3">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="user1" className='w-100' />
              </div>
              <div className="col-3">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="user1" className='w-100' />
              </div>
              <div className="col-3">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="user1" className='w-100' />
              </div>
              <div className="col-3">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="user1" className='w-100' />
              </div>
            </div>
            <div className="row my-2">
              <div className="col-3">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="user1" className='w-100' />
              </div>
              <div className="col-3">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="user1" className='w-100' />
              </div>
              <div className="col-3">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="user1" className='w-100' />
              </div>
              <div className="col-3">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="user1" className='w-100' />
              </div>
            </div>




          </div>
        </div>

      </section>
    </>

  )
}

export default LandingPage
