import React from "react";

import { Container, Row, Nav } from "react-bootstrap";
import "./sidebar.css";

export default function Sidebar({ currentForm, handleFormChange }) {
  return (
    <Container>
      <Row className="navBar">
        <Nav className="navLinks">
          <Nav.Link
            id="aboutForm"
            onClick={() => handleFormChange(1)}
            className={currentForm === 1 ? "nav-link active" : "nav-link"}
          >
            About Me
          </Nav.Link>
          <Nav.Link
            id="educationForm"
            onClick={() => handleFormChange(2)}
            className={currentForm === 2 ? "nav-link active" : "nav-link"}
          >
            Education
          </Nav.Link>
          <Nav.Link
            id="skillsForm"
            onClick={() => handleFormChange(3)}
            className={currentForm === 3 ? "nav-link active" : "nav-link"}
          >
            Skills
          </Nav.Link>

          <Nav.Link
            id="experienceForm"
            onClick={() => handleFormChange(4)}
            className={currentForm === 4 ? "nav-link active" : "nav-link"}
          >
            Experience
          </Nav.Link>

          <Nav.Link
            id="projectsForm"
            onClick={() => handleFormChange(5)}
            className={currentForm === 5 ? "nav-link active" : "nav-link"}
          >
            Projects
          </Nav.Link>

          <Nav.Link
            id="contactForm"
            onClick={() => handleFormChange(6)}
            className={currentForm === 6 ? "nav-link active" : "nav-link"}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Row>
    </Container>
  );
}
