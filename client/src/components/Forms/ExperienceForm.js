import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ExperienceForm = ({ exp, setExp, setCurrentForm }) => {
  const [experience, setExperience] = useState({
    jobTitle: "",
    jobDescription: "",
    startDate: "",
    endDate: "",
    achievements: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setExperience({ ...experience, [name]: value });
  };

  return (
    <div>
      <>
        <Container>
          <h1>Work Experience</h1>
          <Row>
            <Col>
              <Form>
                <input
                  type="text"
                  placeholder="Job Title"
                  name="jobTitle"
                  value={experience.jobTitle}
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                />

                <input
                  type="date"
                  placeholder="Start Date"
                  name="startDate"
                  value={experience.startDate}
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                />

                <input
                  type="date"
                  placeholder="End Date"
                  name="endDate"
                  value={experience.endDate}
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                />
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Achievements</Form.Label>
                  <input
                    as="textarea"
                    rows={3}
                    name="achievements"
                    value={experience.achievements}
                    style={{ height: "70px" }}
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                  />
                </Form.Group>
              </Form>
            </Col>
            <Col>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Job Description</Form.Label>
                  <input
                    as="textarea"
                    rows={3}
                    name="jobDescription"
                    value={experience.jobDescription}
                    style={{ height: "70px" }}
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                  />
                  <Button
                    onClick={() => {
                      setExp([...exp, experience]);
                      setExperience({
                        jobTitle: "",
                        jobDescription: "",
                        startDate: "",
                        endDate: "",
                        achievements: "",
                      });
                    }}
                  >
                    Add Experience
                  </Button>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Button
            variant="primary"
            onClick={() => {
              setCurrentForm(5);
            }}
          >
            Submit Experience!
          </Button>{" "}
        </Container>
      </>
    </div>
  );
};

export default ExperienceForm;
