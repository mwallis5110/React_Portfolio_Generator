import React, {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Particles from 'react-particles-js';
import Axios from "axios";
import {Link} from 'react-router-dom';
import Auth from '../../utils/auth';


export default function Portfolio() {
   useEffect(() => {
    let id = localStorage.getItem("userId")
    Axios.get('/api/myPortfolio/' + id).then(data => console.log(data)) 
   },[]) 
  return(
    <div className = "masterDiv">
        {/* <div className="particlesDiv">
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
        </div> */}
        <Container>
            <button onClick={()=> {Auth.logout()}}>LogOut</button>
            <Link to = '/conditionals'> Edit Portfolio
            </Link>
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

