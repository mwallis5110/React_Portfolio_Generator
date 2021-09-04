import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const ContactForm = () => {
    return (
      <div>
          <>
            <Container>
                <h1>Contact Things</h1>
                <Row>
                    <Col>
                        <Form>
                            <Form.Control type="text" placeholder="Phone Number" />
                            <Form.Control type="text" placeholder="Email" />
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Control type="text" placeholder="LinkedIn URL" />
                            <Form.Control type="text" placeholder="Github URL" />
                            <Form.Control type="text" placeholder="Twitter URL" />
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Control type="text" placeholder="Facebook URL" />
                            <Form.Control type="text" placeholder="Instagram URL" />
                        </Form>
                    </Col>
                </Row>
                <Button variant="primary">Submit Contact Information!</Button>{' '}
            </Container>
          </>
        </div>
        )};
  
  export default ContactForm;
  