import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { } from "react-bootstrap";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Portfolio() {
  return(
<div className = "masterDiv">
    <Container>
    <Row>
        <Col sm={4}>sm=4</Col>
        <Col sm={8}>sm=8</Col>
    </Row>
    </Container>
    <div className = "aboutMeContainer">
        <div className = "pageOne">
            <h2>Hello my name is </h2>
            <h1 className = "fullName"> Joris Pow </h1>
        </div>
    </div>
</div>
  )
}
