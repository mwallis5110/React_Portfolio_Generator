import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Header from '../Header';
import NavBar from '../Navbar';
import Axios from 'axios';


export default function Preview({aboutMe, edu, skills, exp, projects, contact}) {
  const submitPortfolio = () => {
    const id = localStorage.getItem("userId");
    const email = localStorage.getItem("email");
    const portfolio = {
      AboutMe: aboutMe,
      Education: edu,
      Skills: {programmingLanguages:skills[0], hardSkills:skills[1], softSkills:skills[2] },
      ContactMe: contact,
      user: id, 
      user_email: email
    }
    Axios.post('/api/portfolio', portfolio).then(data => console.log(data))
  }

    return (
      <div className="container">
        <Card style={{ width: "18rem" }}>
          <h6>{aboutMe.firstName} {aboutMe.lastName}</h6>
          <p>{aboutMe.introduction}</p>
          <Button onClick={() => {submitPortfolio()}}>Submit Portfolio</Button>
        </Card>
      </div>
    )
    }