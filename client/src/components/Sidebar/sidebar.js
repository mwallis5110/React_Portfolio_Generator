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
                        onClick={() => handleFormChange(1)}
                        className={
                          currentForm === 1 ? "nav-link active" : "nav-link"
                        }
                      >
                        About Me
                      </Nav.Link>
                      <Nav.Link
                        id="educationForm"
                        onClick={() => handleFormChange(2)}
                        className={
                          currentForm === 2 ? "nav-link active" : "nav-link"
                        }
                      >
                        Education
                      </Nav.Link>
                      <Nav.Link
                        id="skillsForm"
                        onClick={() => handleFormChange(3)}
                        className={
                          currentForm === 3 ? "nav-link active" : "nav-link"
                        }
                      >
                        Skills
                      </Nav.Link>

                      <Nav.Link
                        id="experienceForm"
                        onClick={() => handleFormChange(4)}
                        className={
                          currentForm === 4 ? "nav-link active" : "nav-link"
                        }
                      >
                        Experience
                      </Nav.Link>

                      <Nav.Link
                        id="projectsForm"
                        onClick={() => handleFormChange(5)}
                        className={
                          currentForm === 5 ? "nav-link active" : "nav-link"
                        }
                      >
                        Projects
                      </Nav.Link>

                      <Nav.Link
                        id="contactForm"
                        onClick={() => handleFormChange(6)}
                        className={
                          currentForm === 6 ? "nav-link active" : "nav-link"
                        }
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
