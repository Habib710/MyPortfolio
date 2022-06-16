import React from 'react';
import '../Home/Home.css'
import img00 from '../img/profile-pic (1).png'

const About = () => {
    return (
        <section className="my-5 py-lg-5 container">
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
    );
};

export default About;