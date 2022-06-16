import React from 'react'
import './Home.css'
import img from '../img/habib.png'
import img00 from '../img/profile-pic (1).png'
import 'animate.css'
import { Button, Card, ProgressBar } from 'react-bootstrap'
import pro1 from '../img/pro-1.png'
import pro2 from '../img/pro-2.png'
import pro3 from '../img/pro3.png'
import pro4 from '../img/screencapture-zaaraconventioncenter-netlify-app-2022-06-09-18_33_39.png'
import Swal from 'sweetalert2'

const Home = () => {
  const send=(e)=>{
    e.preventDefault();

    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your Messege has been Send',
      showConfirmButton: false,
      timer: 1500
    })



  }
  const now = 95
  const now1 = 85
  const now2 = 75
  return (
    <div>
      <section className=" banner-css p-5">
        <div className=" text-white container ">
          <h2 className="text-white name-css animate__animated animate__fadeInRight animate__slow	2s">
            Hello, <br />  I am Md Habibullah <br />
            <h3>Web Developer</h3>{' '}
          </h2>
          <p>
            A front-end+back -end developer with extensive experience in
            building responsive websites and web applications. I have a
            passion for creating user-friendly interfaces and strive to build
            websites that are both visually appealing and easy to use. I
            have a strong understanding of front-end development technologies
            and principles of user experience design.
          </p>
          <button className="my-btn-css">About Me</button>
        </div>
        <div className='img-div '>
          <img className='' width='100%' src={img} alt="img" />
        </div>
      </section>
      {/* About me section */}
      <section className="my-5 container">
        <div className="row ">
          <div className="col-lg-4">
            <img width="100%" className="" src={img00} alt="" />
          </div>
          <div className="col-lg-8 ">
            <h1 className="m-5">About Me </h1>

            <p className="m-5">
              A front-end+back -end developer with extensive experience in
              building responsive websites and web applications. I have a
              passion for creating user-friendly interfaces and strive to build
              websites that are both visually appealing and easy to use. I have
              Experienced to work with Group in Git-Hub Projects. I have a
              strong understanding of front-end development technologies and
              principles of user experience design
            </p>
            <button className="hIRE-CSS-BTN ms-5">HIRE ME </button>
            <button className="hIRE-CSS-BTN ">DOWNLODE CV</button>
          </div>
        </div>
      </section>
      {/* skills section */}
      <section className="container my-5">
        <h1 className="text-center py-5"> My Skills</h1>
        <div className="row">
          <div className="col-lg-8 ">
            <div className="px-5">
              HTML5{' '}
              <ProgressBar
                className="custom-progress"
                now={now}
                label={`${now}%`}
                animated
              />
              CSS3{' '}
              <ProgressBar
                className="custom-progress"
                animated
                now={now}
                label={`${now}%`}
              />
              REACT JS{' '}
              <ProgressBar
                className="custom-progress"
                animated
                now={now1}
                label={`${now1}%`}
              />
              NODE JS{' '}
              <ProgressBar
                className="custom-progress"
                animated
                now={now2}
                label={`${now2}%`}
              />
              EXPRESS JS{' '}
              <ProgressBar
                className="custom-progress"
                animated
                now={now2}
                label={`${now2}%`}
              />
              BOOTSTRAP5{' '}
              <ProgressBar className="custom-progress" animated now={98} />
            </div>
          </div>
          <div className="col-lg-4 myskill px-5">
            <div>
              <h3>Experts</h3>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>BOOTSTARP5</li>
              <li>TAILWIND CSS</li>

              <li>JAVASCRIPT ES6</li>
              <li>REACT JS</li>
            </div>
            <div>
              <h3>Comfortable</h3>
              <li> FIREBASE</li>
              <li>NODE JS</li>
              <li>EXPRESS JS</li>
              <li>MONGODB</li>
            </div>
            <div>
              <h3>Familiar</h3>
              <li>TYPESCRIPT</li>
              <li>REACT NATIVE</li>
              <li>NEXT JS</li>
            </div>
            <div>
              <h3>Tools</h3>
              <li>GIT-HUB</li>
              <li>VS CODE</li>
              <li>FIGMA</li>
            </div>
          </div>
        </div>
      </section>
      {/* my project........... */}
      <section>
        <h1 className="text-center my-5 p-3">My Projects</h1>
        <div className="myproject ">
          <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img className="card-css" variant="top" src={pro1} />
              <Card.Body>
                <Card.Title>DEPONIC</Card.Title>
                <Card.Text>
                  Develop by: <br />
                  React js, JS ,Css3, Firebase,Node js ,Express js , MongoDb
                </Card.Text>
                <Button href='https://deponic-62e80.web.app/home' target='blnk' className="btn-grad">Live Preview</Button>
              </Card.Body>
            </Card>
          </div>

          <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img
                className="card-css"
                width={100}
                variant="top"
                src={pro3}
              />
              <Card.Body>
                <Card.Title>CORPORATE</Card.Title>
                <Card.Text>
                  Develop by: <br />
                  RAW HTMAL5,CSS3 <br />
                  Only
                </Card.Text>
                <Button href='https://mdhibib-project.netlify.app/' target='blnk' className="btn-grad">Live Preview</Button>
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img className="card-css" variant="top" src={pro2} />
              <Card.Body>
                <Card.Title>JANTRIK</Card.Title>
                <Card.Text>
                  Develop by: <br />
                  React js, JS ,Css3, Firebase,Node js ,Express js , MongoDb
                </Card.Text>
                <Button href='https://jantrik-d4cca.web.app/' target='blnk' className="btn-grad">Live Preview</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="">
            <Card className="" style={{ width: '18rem' }}>
              <Card.Img className="card-css" variant="top" src={pro4} />
              <Card.Body>
                <Card.Title>ZAARA CONVENTUON</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button href='https://zaaraconventioncenter.netlify.app/' target='blnk'  className="btn-grad">Live Preview</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
      {/* contract form........... */}
      <section id='con' className='my-5 container'>
          <h1 className='text-center my-5'>Contract </h1>

          <div className='row container'>
              <div className='col-lg-8'>
                  <h3 className='p-3'>Get In Touch</h3>
                  <form action="https://formsubmit.co/el/yulubo" method="POST"  className='contract-form'>
                      <input className='contract-form-css' type="text" placeholder='YOUR NAME' name="name" required />
                      <br />
                      <input className='contract-form-css' type="email" placeholder='YOUR EMAIL' name="email"  required/>
                      <br />
                      <input className='contract-form-css' type="number" placeholder='YOUR PHONE NUMBER' name="number" required />
                      <br />

                      <textarea className='contract-form-css'placeholder='WRIGHT YOUR MASSEGE' name='text' ></textarea>
                      <br />
                      <input type='submit'  value='Send' className='hIRE-CSS-BTN'/>
                  </form>

              </div>
              <div className='col-lg-4'>
                  <h3 className='p-3'>My Contact Details</h3>
                  <h6 className='mt-4'>Email</h6>
                  <p>mdhabib71024@gmail.com</p>
                  <h6 className='mt-4'>Phone</h6>
                  <p>+8801571024601</p>
                  <h6 className='mt-5'>Adress</h6>
                  <p>Narayanganj, Dhaka , Bangladesh</p>

              </div>
          </div>


      </section>
      
    </div>
  )
}

export default Home
