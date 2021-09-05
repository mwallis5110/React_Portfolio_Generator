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
  

  const renderForm = () => {
    if (currentForm === 1) {
      return <About />;
    } else if (currentForm === 2) {
      return <Education />;
    } else if (currentForm === 3) {
      return <Skills />;
    } else if (currentForm === 4) {
      return <Experience />;
    } else if (currentForm === 5) {
      return <Projects />;
    } else if (currentForm === 6) {
      return <Contact />;
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
