import React, { useState } from "react";
import Sidebar from "./sidebar";
import About from "../Forms/AboutMeForm";
import Education from "../Forms/EducationForm";
import Skills from "../Forms/SkillsForm";
import Experience from "../Forms/ExperienceForm";
import Projects from "../Forms/ProjectForm";
import Contact from "../Forms/ContactForm";
import Preview from "../Portfolio_Preview";
import "./sidebar.css";

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
      return (
        <About
          aboutMe={aboutMe}
          setCurrentForm={setCurrentForm}
          setAboutMe={setAboutMe}
        />
      );
    } else if (currentForm === 2) {
      return (
        <Education edu={edu} setCurrentForm={setCurrentForm} setEdu={setEdu} />
      );
    } else if (currentForm === 3) {
      return (
        <Skills
          skills={skills}
          setCurrentForm={setCurrentForm}
          setSkills={setSkills}
        />
      );
    } else if (currentForm === 4) {
      return (
        <Experience exp={exp} setCurrentForm={setCurrentForm} setExp={setExp} />
      );
    } else if (currentForm === 5) {
      return (
        <Projects
          projects={projects}
          setCurrentForm={setCurrentForm}
          setProjects={setProjects}
        />
      );
    } else if (currentForm === 6) {
      return (
        <Contact
          contact={contact}
          setCurrentForm={setCurrentForm}
          setContact={setContact}
        />
      );
    } else if (currentForm === 7) {
      return (
        <Preview
          aboutMe={aboutMe}
          edu={edu}
          skills={skills}
          exp={exp}
          projects={projects}
          contact={contact}
        />
      );
    }
  };

  const handleFormChange = (form) => setCurrentForm(form);

  return (
    <div>
      <Sidebar
        currentForm={currentForm}
        handleFormChange={handleFormChange}
        id="currentForm"
      />
      {renderForm()}
    </div>
  );
}
