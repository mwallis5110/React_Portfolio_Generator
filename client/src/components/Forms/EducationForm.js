import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const EducationForm = ({edu, setEdu, setCurrentForm}) => {

    const [education, setEducation] = useState({
        school: '', 
        degree: '',
        graduation: ''
    })

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setEducation({ ...education, [name]: value });
    };

    return (
      <div>
        <>
          <Container>
            <h1>Education Things</h1>
            <Row>
              <Col>
                <Form>
                  <Form.Control
                    type="text"
                    placeholder="Institution"
                    name="school"
                    value={education.school}
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                  />
                  <Form.Control
                    type="text"
                    placeholder="Degree"
                    name="degree"
                    value={education.degree}
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                  />
                </Form>
              </Col>
              <Col>
                <Form>
                  <Form.Control
                    type="date"
                    placeholder="Graduation Date"
                    name="graduation"
                    value={education.graduation}
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                  />
                  <Button
                    onClick={() => {
                      setEdu([...edu, education]);
                      setEducation({});
                    }}
                  >
                    Add Education
                  </Button>
                  {/* <Form.Control type="text" placeholder="Certifications" />  */}
                </Form>
              </Col>
              <Col></Col>
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
    );};
  
  export default EducationForm;
  