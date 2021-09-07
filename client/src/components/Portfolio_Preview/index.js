import React, { useState, useEffect } from "react";
import Education from "../Forms/EducationForm";
import Skills from "../Forms/SkillsForm";
import Experience from "../Forms/ExperienceForm";
import Projects from "../Forms/ProjectForm";
import Contact from "../Forms/ContactForm";
// import Preview from './Portfolio_Preview';
import { Row, Card, Button } from "react-bootstrap";
import Header from "../Header";
import NavBar from "../Navbar";
import { useParams } from "react-router";
import Axios from "axios";
import './preview.css';
import { useHistory } from "react-router-dom";

// How should forms imported here interact witht he rest of the page?

export default function Preview({
  aboutMe,
  edu,
  skills,
  exp,
  projects,
  contact,
}) {
  // const [currentForm, setCurrentForm] = useState(1);
  const { emailAddress } = useParams();
  const [port, setPort] = useState([{}]);
  const [info, setInfo] = useState([{}]);
  useEffect(() => {
    Axios.get("/api/publicPortfolio/" + emailAddress).then((data) =>
      setPort(data.data[0])
    );
    console.log(port);
  }, []);

  useEffect(() => {
    setInfo(port);
    // This is undefined at this point
    console.log(port);
  }, [port]);

  const history = useHistory()

  const submitPortfolio = () => {
    const id = localStorage.getItem("userId");
    const email = localStorage.getItem("email");
    const portfolio = {
      AboutMe: aboutMe,
      Education: edu,
      Skills: {
        programmingLanguages: skills[0],
        spokenLanguages: skills[1],
        hardSkills: skills[2],
        softSkills: skills[3],
      },
      Experience: exp, 
      Projects: projects,
      ContactMe: contact,
      user: id,
      user_email: email,
    };
  // };

  Axios.post('/api/portfolio', portfolio).then(data => {
      console.log(data)
    history.push('/portfolio/' + data.data.user_email)
  })
  };

  return (
    //About Me info
    

    <div className="container">
      <Card style={{ width: "18rem" }}>
        <h6>
          {aboutMe.firstName} {aboutMe.lastName}
        </h6>
        <p>{aboutMe.introduction}</p>
      </Card>

      {/* Education info */}
      <Card style={{ width: "40rem" }}>
        {edu.map((data) => {
          return (
            <div>
              <h6>{data.institution}</h6>
              <h6>{data.degree}</h6>
              <h6>{data.graduationDate}</h6>
            </div>
          );
        })}
      </Card>

      {/* Skills info */}
      <Row>
        <Card style={{ width: "40rem" }}>
          {skills[0]
            ? skills[0].map((data) => {
                return (
                  <div>
                    <h6>{data}</h6>
                  </div>
                );
              })
            : null}
        </Card>
        <Card style={{ width: "40rem" }}>
          {skills[1]
            ? skills[1].map((data) => {
                return (
                  <div>
                    <h6>{data}</h6>
                  </div>
                );
              })
            : null}
        </Card>
        <Card style={{ width: "40rem" }}>
          {skills[2]
            ? skills[2].map((data) => {
                return (
                  <div>
                    <h6>{data}</h6>
                  </div>
                );
              })
            : null}
        </Card>
        <Card style={{ width: "40rem" }}>
          {skills[3]
            ? skills[3].map((data) => {
                return (
                  <div>
                    <h6>{data}</h6>
                  </div>
                );
              })
            : null}
        </Card>
      </Row>

      {/* Experience Info */}
      <Card style={{ width: "40rem" }}>
        {exp.map((data) => {
          return (
            <div>
              <h6>{data.jobTitle}</h6>
              <h6>{data.jobDescription}</h6>
              <h6>{data.startDate}</h6>
              <h6>{data.endDate}</h6>
              <h6>{data.achievements}</h6>
            </div>
          );
        })}
      </Card>

      {/* Projects Info */}
      <Card style={{ width: "40rem" }}>
        {projects.map((data) => {
          return (
            <div>
              <h6>{data.title}</h6>
              <h6>{data.description}</h6>
              <h6>{data.link}</h6>
            </div>
          );
        })}
      </Card>

      {/* Contact Info */}
      <Card style={{ width: "18rem" }}>
        <h6>{contact.phone}</h6>
        <h6>{contact.linkedIn}</h6>
        <h6>{contact.github}</h6>
        <h6>{contact.twitter}</h6>
        <h6>{contact.facebook}</h6>
        <h6>{contact.instagram}</h6>
      </Card>
      <Button onClick={() => submitPortfolio()}>Looks Good!</Button>
    </div>
  );
}
