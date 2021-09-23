import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import "./public.css";
import Particles from 'react-particles-js';

export default function Public() {
  const { email } = useParams();
  const [port, setPort] = useState([{}]);
  const [info, setInfo] = useState([{}]);
  useEffect(() => {
    Axios.get("/api/publicPortfolio/" + email).then((data) =>
      setPort(data.data[0])
    );
    console.log(port);
  }, []);

  useEffect(() => {
    setInfo(port);
    // This is undefined at this point
    console.log(port);
  }, [port]);

  const handleLink = (link) => {
    window.location.replace(link);
  };

  console.log(port.AboutMe);
  return (
    <div classname="particleDiv">
      <Particles params={{particles: {number: {value: 70,density: {enable: true,value_area: 1000,}},},}}/>
      {info.AboutMe ? (
        <div className="portfolioDiv">
          <a href="/"><img src="/icons/home.png"></img></a>
          <h3 className="aboutMeHeader">
            <span>About Me</span>
          </h3>
          <div className="section-about section-card section-card-aboutMe">
            <h1>
              {info.AboutMe.firstName} {info.AboutMe.lastName}
            </h1>
            <h3>Email me :{info.user_email}</h3>
            <p>{info.AboutMe.introduction}</p>
          </div>

          <h3 className="eduHeader">Education</h3>
          {info.Education.map((edu) => {
            console.log(edu);
            return (
              <div className="section-edu section-card section-card-edu">
                <h4>School: {edu.institution[0]}</h4>
                <h4>Degree: {edu.degree[0]}</h4>
                <h4>Graduation Date: {edu.graduationDate[0]}</h4>
              </div>
            );
          })}
          <h3 className="skillsHeader">Skills</h3>
          <div className="section-contact section-card section-card-skills">
            {/* <h6>Languages: {info.Skills.languages}</h6> */}
            <h6>Programming Languages: {info.Skills.programmingLanguages}</h6>
            <h6>Hard Skills: {info.Skills.hardSkills}</h6>
            <h6>Soft Skills: {info.Skills.softSkills}</h6>
          </div>

          <h3 className="skillsHeader">Past Experience</h3>
          {info.Experience.map((exp) => {
            return (
              <div className="section-edu section-card section-card-edu">
                <h6>Job Title: {exp.jobTitle[0]}</h6>
                <h6>Job Description: {exp.jobDescription[0]}</h6>
                <h6>Start Date: {exp.startDate[0]}</h6>
                <h6>End Date: {exp.endDate[0]}</h6>
                <h6>Acheivements: {exp.achievements[0]}</h6>
              </div>
            );
          })}

          <h3 className="skillsHeader">Projects</h3>
          {info.Projects.map((projects) => {
            return (
              <div className="section-about section-card section-card-aboutMe">
                <h6>Project Title: {projects.title}</h6>
                <h6>Project Description: {projects.description}</h6>
                <h6>Project Link: {projects.link}</h6>
              </div>
            );
          })}

          <div className="container">
            <footer className="footer">
                <div target="_blank" onClick={() => {handleLink("//"+info.ContactMe.github)}}><img src="/icons/github.png" className = "icon" alt="Github"></img></div>
                <div onClick={() => {handleLink("//"+info.ContactMe.linkedIn)}}><img src="/icons/linkedIn.png" className = "icon" alt="LinkedIn"></img></div>
                <div onClick={() => {handleLink("//"+info.ContactMe.facebook)}}><img src = "/icons/facebook.png" className = "icon" alt="Facebook"></img></div>
                <div onClick={() => {handleLink("//"+info.ContactMe.instagram)}}><img src = "/icons/instagram.png" className = "icon" alt="Instagram"></img></div>
                <div onClick={() => {handleLink("//"+info.ContactMe.twitter)}}><img src = "/icons/twitter.png" className = "icon" alt="Twitter"></img></div>
            </footer>
          </div>
        </div>
      ) : (
        <h1 className="loading">Retrieving Portfolio...</h1>
      )}
    </div>
  );
}
