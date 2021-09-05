import React, { useState } from "react";
import Sidebar from "./sidebar";
import About from "../Forms/AboutMeForm";
import Education from "../Forms/EducationForm";
import Skills from "../Forms/SkillsForm";
import Experience from "../Forms/ExperienceForm";
import Projects from "../Forms/ProjectForm";
import Contact from "../Forms/ContactForm";

export default function SidebarConditionals() {
  const [currentForm, setCurrentForm] = useState(1);
  const [aboutMe, setAboutMe] = useState({});
  const [edu, setEdu] = useState([]);
  const [skills, setSkills] = useState([]);
  const [exp, setExp] = useState([]);
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});




  const renderForm = () => {
    if (currentForm === 1) {
      return <About aboutMe = {aboutMe} setCurrentForm = {setCurrentForm} setAboutMe = {setAboutMe}/>;
    } else if (currentForm === 2) {
      return <Education edu = {edu} setCurrentForm= {setCurrentForm} setEdu = {setEdu}/>;
    } else if (currentForm === 3) {
      return (
        <Skills
          skills={skills}
          setCurrentForm={setCurrentForm}
          setSkills={setSkills}
        />
      );
    } else if (currentForm === 4) {
      return <Experience exp = {exp} setExp = {setExp} />;
    } else if (currentForm === 5) {
      return <Projects projects = {projects} setProjects = {setProjects}/>;
    } else if (currentForm === 6) {
      return <Contact contact = {contact} setContact = {setContact}/>;
    }
  };

  const handleFormChange = (form) => setCurrentForm(form);

  return (
    <div>
      <Sidebar currentForm={currentForm} handleFormChange={handleFormChange} />
      {renderForm()}
    </div>
  );
}
