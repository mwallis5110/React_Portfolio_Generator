import React from "react";

const linkedInUrl = "https://www.linkedin.com/in/masonwallis/";
const github = "https://github.com/mwallis5110";
const resume = "assets/images/Mason_Wallis_Resume.pdf";
const emailAddress = "mailto: mwallis5110@gmail.com";

export default function Footer() {
  return (
    <container>
      <footer className="contact">
        <h2>Contact Me</h2>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h4>({linkedInUrl})LinkedIn</h4>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h4>({github})Github</h4>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h4>({resume})My Resumé</h4>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <h4>({emailAddress})Email Me</h4>
          </div>
        </div>
      </footer>
    </container>
  );
}
