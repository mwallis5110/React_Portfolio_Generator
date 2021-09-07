import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const EducationForm = ({ edu, setEdu, setCurrentForm }) => {
  const [education, setEducation] = useState({
    institution: "",
    degree: "",
    graduationDate: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEducation({ ...education, [name]: value });
  };

  return (
    <div>
      <>
        <Container>
          <h1>Education Information</h1>
          <Row>
            <Col>
              <Form>
                <input
                  type="text"
                  placeholder="Institution"
                  name="institution"
                  value={education.institution}
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                />
                <input
                  type="text"
                  placeholder="Degree"
                  name="degree"
                  value={education.degree}
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                />
              </Form>
              <Form>
                <input
                  type="date"
                  placeholder="Graduation Date"
                  name="graduationDate"
                  value={education.graduationDate}
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                />
                <Button
                  onClick={() => {
                    setEdu([...edu, education]);
                    setEducation({
                      institution: "",
                      degree: "",
                      graduationDate: "",
                    });
                  }}
                >
                  Add Education
                </Button>
              </Form>
            </Col>
          </Row>
          <Button
            variant="primary"
            onClick={() => {
              setCurrentForm(3);
            }}
          >
            Go To Skills
          </Button>{" "}
        </Container>
      </>
    </div>
  );
};

export default EducationForm;
