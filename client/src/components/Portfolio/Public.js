import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
// import AboutMe from "./AboutMe";
import './public.css'


export default function Public() {
    const { email } = useParams();
    const [port, setPort] = useState([{}])
    const [info, setInfo] = useState([{}])
    useEffect(() => {
        Axios.get('/api/publicPortfolio/' + email).then(data => setPort(data.data[0]));
        console.log(port);
    }, [])

    useEffect(() => {
        setInfo(port);
        // This is undefined at this point
        console.log(port);
    }, [port])

    console.log(port.AboutMe);
    return (
        <div>
            {info.AboutMe !== undefined ? (
                <div className="portfolioDiv">
                    <h3>About Me</h3>
                    <div className='section-about section-card section-card-aboutMe'>
                        <h1>
                            {port.AboutMe.firstName} {port.AboutMe.lastName}
                        </h1>
                        <p>{port.AboutMe.introduction}</p>
                    </div>

                    <h3>Education</h3>
                    {port.Education.map(edu => {
                        console.log(edu)
                        return (
                            <div className='section-edu section-card section-card-edu'>
                                <h4>School: {edu.institution[0]}</h4>
                                <h4>Degree: {edu.degree[0]}</h4>
                                <h4>Graduation Date: {edu.graduationDate[0]}</h4>
                            </div>
                        )
                    })}
                    <h3>Skills</h3>
                    <div className='section-contact section-card section-card-skills'>
                        <h6>GitHub: {port.Skills.hardSkills}</h6>
                        <h6>FaceBook: {port.ContactMe.facebook}</h6>
                        <h6>Email: <a mailto={port.user_email}>{port.user_email}</a></h6>
                    </div>
                    <div className="container">
                        <footer className="footer">
                            <a href={port.ContactMe.github}><img src="/icons/github.png" className = "icon" alt="Github"></img></a>
                            <a href={port.ContactMe.linkedIn}><img src="/icons/linkedIn.png" className = "icon" alt="LinkedIn"></img></a>
                            <a href={port.ContactMe.facebook}><img src = "/icons/facebook.png" className = "icon" alt="Facebook"></img></a>
                            <a href={port.ContactMe.instagram}><img src = "/icons/instagram.png" className = "icon" alt="Instagram"></img></a>
                            <span class="stretch"></span>
                        </footer>
                    </div>
                </div>
            ) : <h3>Not working... yet!</h3>}
        </div>
    )
};

