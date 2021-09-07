import React, {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Particles from 'react-particles-js';
import Axios from "axios";
import {Link} from 'react-router-dom';
import Auth from '../../utils/auth';
import './createPortfolio.css';


export default function Portfolio() {
   useEffect(() => {
    let id = localStorage.getItem("userId")
    Axios.get('/api/myPortfolio/' + id).then(data => console.log(data)) 
   },[]) 
   

  return(
    <div className = "masterDiv">
        <div className="homepageDiv">
            <h1 className="websiteName"> Auto Resume</h1>
            <h1>Welcome back!</h1>
            <div>
                <div className="whitePage">
                    <Link to = '/conditionals' className="newPort">Create a new Portfolio</Link>
                </div>
            </div>
            <button onClick={()=> {Auth.logout()}}>LogOut</button>
        </div>
    </div>
  )
}


// Particle stuff (Pretty Lines)
//  <div className="particlesDiv">
//         <Particles
//                 params={{
//                 particles: {
//                     number: {
//                     value: 70,
//                     density: {
//                         enable: true,
//                         value_area: 1000,
//                     }
//                     },
//                 },
//                 }}
//             />
//         </div> 