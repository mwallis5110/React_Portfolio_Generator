import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import AboutMe from "./AboutMe"


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
                <div>
                    <h5>About Me</h5>
                    <div className='section-about section-card'>
                        <h1>
                            {port.AboutMe.firstName} {port.AboutMe.lastName}
                        </h1>
                        <p>{port.AboutMe.introduction}</p>
                    </div>

                    <h5>Education</h5>
                    {port.Education.map(edu => {
                        console.log(edu)
                        return (
                            <div className='section-edu section-card'>
                                <h4>School: {edu.institution[0]}</h4>
                                <h4>Degree: {edu.degree[0]}</h4>
                                <h4>Graduation Date: {edu.graduationDate[0]}</h4>
                            </div>
                        )
                    })}
                    <h5>Skills</h5>
                    <div className='section-contact section-card'>
                        <h6>GitHub: {port.ContactMe.github}</h6>
                        <h6>FaceBook: {port.ContactMe.facebook}</h6>
                        <h6>Email: <a mailto={port.user_email}>{port.user_email}</a></h6>
                    </div>

                </div>
            ) : <h3>Not working... yet!</h3>}
        </div>
    )
};

