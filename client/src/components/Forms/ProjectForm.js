import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "./ProjectForm.css";
import Button from "react-bootstrap/Button";

const ProjectForm = ({ projects, setProjects, setCurrentForm }) => {
  const [assignment, setAssignment] = useState({
    title: "",
    description: "",
    link: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAssignment({ ...assignment, [name]: value });
  };

  return (
    <div>
      <>
        <Container>
          <h1>Past Projects</h1>
          <Row>
            <Col>
              <Form>
                <input
                  type="text"
                  placeholder="Project Title"
                  name="title"
                  value={assignment.title}
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                />
                <input
                  type="text"
                  placeholder="Project Description"
                  name="description"
                  value={assignment.description}
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                />
              </Form>
            </Col>
            <Col>
              <Form>
                <input
                  type="text"
                  placeholder="URL to Project"
                  name="link"
                  value={assignment.link}
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                />
                <Button
                  className="wideBtn"
                  onClick={() => {
                    setProjects([...projects, assignment]);
                    setAssignment({ title: "", description: "", link: "" });
                  }}
                >
                  Add
                </Button>
              </Form>
            </Col>
          </Row>
          <Button
            variant="primary"
            onClick={() => {
              setCurrentForm(6);
            }}
          >
            Submit Projects!
          </Button>{" "}
        </Container>
      </>
    </div>
  );
};

export default ProjectForm;
