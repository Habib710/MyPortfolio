import React from 'react'
import './Home.css'
import img from '../img/profile-pic (2).png'
import 'animate.css'
import { Button, Card, ProgressBar } from 'react-bootstrap'
import pro1 from '../img/pro-1.png'
import pro2 from '../img/pro-2.png'
import pro3 from '../img/pro3.png'
import pro4 from '../img/screencapture-zaaraconventioncenter-netlify-app-2022-06-09-18_33_39.png'

const Home = () => {
  const now = 95
  const now1 = 85
  const now2 = 75
  return (
    <div>
      <section className="banner-css p-5">
        <div className=" text-white  ">
          <h1 className="text-white name-css animate__animated animate__fadeInRight animate__slow	2s">
            Hello <br /> <span> I am Md Habibullah</span> <br />
            <h3>Web Developer</h3>{' '}
          </h1>
          <p>
            A front-end+back -end developer with extensive experience in
            building responsive websites and web applications. <br /> I have a
            passion for creating user-friendly interfaces and strive to build
            websites that are both visually appealing and easy to use. <br /> I
            have a strong understanding of front-end development technologies
            and principles of user experience design.
          </p>
          <button className="my-btn-css">About Me</button>
        </div>
      </section>
      {/* About me section */}
      <section className="my-5 container">
        <div className="row ">
          <div className="col-lg-4">
            <img width="100%" className="" src={img} alt="" />
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
                <Button className="btn-grad">Live Preview</Button>
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
                <Button className="btn-grad">Live Preview</Button>
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
                <Button className="btn-grad">Live Preview</Button>
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
                <Button className="btn-grad">Live Preview</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
