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

    const handleLink = (link) => {
        window.location.replace(link)
    }

    console.log(port.AboutMe);
    return (
        <div>
            {info.AboutMe ? (
                <div className="portfolioDiv">
                    <h3 className="aboutMeHeader"><span>About Me</span></h3>
                    <div className='section-about section-card section-card-aboutMe'>
                        <h1>
                            {info.AboutMe.firstName} {info.AboutMe.lastName}
                        </h1>
                        <p>{info.AboutMe.introduction}</p>
                    </div>

                    <h3 className="eduHeader">Education</h3>
                    {info.Education.map(edu => {
                        console.log(edu)
                        return (
                            <div className='section-edu section-card section-card-edu'>
                                <h4>School: {edu.institution[0]}</h4>
                                <h4>Degree: {edu.degree[0]}</h4>
                                <h4>Graduation Date: {edu.graduationDate[0]}</h4>
                            </div>
                        )
                    })}
                    <h3 className="skillsHeader">Skills</h3>
                    <div className='section-contact section-card section-card-skills'>
                        <h6>Languages: {info.Skills.languages}</h6>
                        <h6>Programming Languages: {info.Skills.programmingLanguages}</h6>
                        <h6>Hard Skills: {info.Skills.hardSkills}</h6>
                        <h6>Soft Skills: {info.Skills.softSkills}</h6>
                    </div>
                    
                    <div className="container">
                        <footer className="footer">
                            <div onClick={() => {handleLink(info.ContactMe.github)}}><img src="/icons/github.png" className = "icon" alt="Github"></img></div>
                            <div onClick={() => {handleLink(info.ContactMe.linkedIn)}}><img src="/icons/linkedIn.png" className = "icon" alt="LinkedIn"></img></div>
                            <div onClick={() => {handleLink(info.ContactMe.facebook)}}><img src = "/icons/facebook.png" className = "icon" alt="Facebook"></img></div>
                            <div onClick={() => {handleLink(info.ContactMe.instagram)}}><img src = "/icons/instagram.png" className = "icon" alt="Instagram"></img></div>
                            <span class="stretch"></span>
                        </footer>
                    </div>
                </div>
            ) : <h1 className="loading">Retrieving Portfolio...</h1>}
        </div>
    )
};

