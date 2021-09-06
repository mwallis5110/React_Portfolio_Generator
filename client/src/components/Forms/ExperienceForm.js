import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const ExperienceForm = () => {

    const [jobTitle, setJobTitle] = useState('')
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [endDate, setEndDate] = useState("");
    
    
    
    const [langArr, setLangArr] = useState([]);
    const [hardArr, setHardArr] = useState([]);
    const [softArr, setSoftArr] = useState([]);




    return (
        <div>
            <>
                <Container>
                    <h1>Experience Things</h1>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Control type="text" placeholder="Job Title" />
                                <Form.Control type="date" placeholder="Start Date" />
                                <Form.Control type="date" placeholder="End Date" />
                            </Form>
                        </Col>
                        <Col>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Achievements</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Job Description</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    <Button variant="primary">Submit Experience!</Button>{' '}
                </Container>
            </>
        </div>
    )
};

export default ExperienceForm;
