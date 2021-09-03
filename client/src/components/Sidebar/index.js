import React from "react";

export default function Sidebar() {
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
