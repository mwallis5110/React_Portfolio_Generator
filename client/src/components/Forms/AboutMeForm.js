import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const AboutMeForm = () => {

    return (
      <div>
          <>
            <Container>
                <Row>
                    <Col>
                        <Form>
                            <Form.Control type="text" placeholder="First Name" />
                            <Form.Control type="text" placeholder="Last Name" />
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Introduction</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
                <Button variant="primary">Submit About Me!</Button>{' '}
            </Container>
          </>
        </div>
        )};
  
  export default AboutMeForm;
  