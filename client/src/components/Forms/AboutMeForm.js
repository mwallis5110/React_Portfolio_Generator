import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "./AboutMeForm.css";
import Button from "react-bootstrap/Button";

const AboutMeForm = ({ aboutMe, setAboutMe, setCurrentForm }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAboutMe({ ...aboutMe, [name]: value });
  };
  return (
    <div>
      <>
        <Container>
          <h1>About Me</h1>
          <Row>
            <Col>
              <Form>
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                />
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Introduce yourself!</Form.Label>
                  <Form.Control
                    as="textarea"
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                    rows={3}
                    style={{ height: "223px" }}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Button
            variant="primary"
            onClick={() => {
              setCurrentForm(2);
            }}
          >
            Submit
          </Button>{" "}
        </Container>
      </>
    </div>
  );
};

export default AboutMeForm;
