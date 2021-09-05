import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./sidebar";
import { } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Particles from 'react-particles-js';

export default function Portfolio() {
  return(
    <div className = "masterDiv">
        <div>
            <Sidebar currentForm={currentForm} handleFormChange={handleFormChange} />
            {renderForm()}
        </div>
        <div className="particlesDiv">
        <Particles
                params={{
                particles: {
                    number: {
                    value: 70,
                    density: {
                        enable: true,
                        value_area: 1000,
                    }
                    },
                },
                }}
            />
        </div>
        <Container>

            {/* <div className = "aboutMeContainer">
                <Row>
                    <Col sm={4}>
                        <div className = "pageOne">
                            <h2>Hello my name is </h2>
                            <h1 className = "fullName"> Joris Pow </h1>
                        </div>
                    </Col>
                    <Col sm={8}>
                        <h4> Here we can write their introduction stuff yadda yadda</h4>
                    </Col>
                </Row>
            </div> */}
        </Container>
    </div>
  )
}

