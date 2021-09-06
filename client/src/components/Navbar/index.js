import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
// import Navigation from "../MainPage/mainPage";

export default function TopNavBar(props) {
  return (
    <Navbar bg="dark">
      <Container>
        <Navbar.Brand onClick={() => props.setPage(1)}>
          Portfolio Generator
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => props.setPage(2)}>Home</Nav.Link>
          <Nav.Link onClick={() => props.setPage(3)}>Portfolios</Nav.Link>
          <Nav.Link onClick={() => props.setPage(4)}>Create Portfolio</Nav.Link>
          <Nav.Link onClick={() => props.setPage(5)}>Create Portfolio</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}