import React from "react";
import Conditionals from './sidebarConditionals';
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";

export default function Sidebar({ currentForm, handleFormChange }) {
    return (
      <Container>
        <div className="formNav">
          <Row>
            <Col sm={4}>
              <div className="formList">
                <Navbar className="light">
                  <Container>
                    <Nav className="me-auto">
                      <Nav.Link
                        id="aboutForm"
                        onClick={() => currentForm === 1}
                        className={
                          currentForm === 1
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        About Me
                      </Nav.Link>
                      <Nav.Link
                        id="educationForm"
                        onClick={() => handleFormChange(2)}
                      >
                        Education
                      </Nav.Link>
                      <Nav.Link
                        id="skillsForm"
                        onClick={() => handleFormChange(3)}
                      >
                        Skills
                      </Nav.Link>
                      <Nav.Link
                        id="experienceForm"
                        onClick={() => handleFormChange(4)}
                      >
                        Experience
                      </Nav.Link>
                      <Nav.Link
                        id="projectsForm"
                        onClick={() => handleFormChange(5)}
                      >
                        Projects
                      </Nav.Link>
                      <Nav.Link
                        id="contactForm"
                        onClick={() => handleFormChange(6)}
                      >
                        Contact
                      </Nav.Link>
                    </Nav>
                  </Container>
                </Navbar>
              </div>
            </Col>
            <Col sm={8}>
              <div class="formDisplay">{currentForm}</div>
            </Col>
          </Row>
        </div>
      </Container>
    );
}
