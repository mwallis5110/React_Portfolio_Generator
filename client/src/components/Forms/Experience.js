import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const SkillsForm = () => {

    return (
      <div>
          <>
            <Container>
                <Row>
                    <Col>
                        <Form>
                            <Form.Control type="text" placeholder="Job Title" />
                            {/* <Form.Control type="text" placeholder="Programming Languages" /> */}
                            <Form.Label>Job Description</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Hard Skills</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                                <br/>
                                <Form.Label>Soft Skills</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Button variant="primary">Submit Skills!</Button>{' '}
            </Container>
          </>
        </div>
        )};
  
  export default SkillsForm;
  