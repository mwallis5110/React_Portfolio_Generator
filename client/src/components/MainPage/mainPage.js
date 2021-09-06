import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AboutMeForm from '../Forms/AboutMeForm';
import EducationForm from '../Forms/EducationForm';
import ContactForm from '../Forms/ContactForm';
import ProjectForm from '../Forms/ProjectForm';
import ExperienceForm from '../Forms/ExperienceForm';


const MainPage = () => {
    return (
      <div>
          <>
          <Container>
                <Row>
                    <Col sm={2}>
                        {/* Sidebar component goes here */}
                        <ul>
                        <li>link 1</li>
                        <li>link 2</li>
                        <li>link 3</li>
                        </ul>
                    </Col>
                    <Col sm={8}>
                        <AboutMeForm/>
                        <ContactForm/>
                        <EducationForm/>
                        <ExperienceForm/>
                        <EducationForm/>
                        <ProjectForm/>
                    </Col>
                </Row>
        </Container>
          </>
        </div>
        )};
  
  export default MainPage;
  
