import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const ProjectForm = () => {

    return (
      <div>
          <>
            <Container>
            <h1>Project Things</h1>
                <Row>
                    <Col>
                        <Form>
                            <input type="text" placeholder="Project Title" />
                            <input type="text" placeholder="Project Description" />
                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <input type="text" placeholder="Image URL" />
                            <input type="text" placeholder="URL to Project" />
                        </Form>
                    </Col>
                </Row>
                <Button variant="primary">Submit Projects!</Button>{' '}
            </Container>
          </>
        </div>
        )};
  
  export default ProjectForm;
  