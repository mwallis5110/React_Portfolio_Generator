import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const ExperienceForm = () => {

    return (
      <div>
          <>
            <Container>
            <h1>Experience Things</h1>
                <Row>
                    <Col>
                        <Form>
                            <input type="text" placeholder="Job Title" />
                            <input type="date" placeholder="Start Date" />
                            <input type="date" placeholder="End Date" />
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Achievements</Form.Label>
                                <input as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col>
                        <Form> 
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Job Description</Form.Label>
                                <input as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Button variant="primary">Submit Experience!</Button>{' '}
            </Container>
          </>
        </div>
        )};
  
  export default ExperienceForm;
  