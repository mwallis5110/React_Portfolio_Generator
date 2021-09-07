import React, { useState, useEffect } from "react";
import { Row, Card, Button } from "react-bootstrap";
import { useParams } from "react-router";
import Axios from "axios";
import "./preview.css";
import { useHistory } from "react-router-dom";

export default function Preview({
  aboutMe,
  edu,
  skills,
  exp,
  projects,
  contact,
}) {
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

  const history = useHistory();

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

    Axios.post("/api/portfolio", portfolio).then((data) => {
      console.log(data);
      history.push("/portfolio/" + data.data.user_email);
    });
  };

  return (
    //About Me info

    <div>
      <Card>
        <h6>
          {aboutMe.firstName} {aboutMe.lastName}
        </h6>
        <p>{aboutMe.introduction}</p>
      </Card>

      {/* Education info */}
      <Card>
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
        <Card>
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
        <Card>
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
        <Card>
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
        <Card>
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

      {/* Experience Info */}
      <Card>
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
      <Card>
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
      <Card>
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
