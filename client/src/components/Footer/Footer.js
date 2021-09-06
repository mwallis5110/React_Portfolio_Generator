import React from "react";
import './Footer.css';


export default function Footer(){
    // Need logic here that says IF data.data[0].contact has phone => phone, etc....
  return(
  <div className="footer">
      <footer className = "container">
          <li ><a href=""><img src="/icons/github.png" className = "icon" alt="Github"></img></a></li>
          <li><a href=""><img src="/icons/linkedIn.png" className = "icon" alt="LinkedIn"></img></a></li>
          <li><a href=""><img src = "/icons/phone.png" className = "icon" alt="Phone Number"></img></a></li>
          <li><a href=""><img src = "/icons/email.png" className = "icon" alt="Email"></img></a></li>
          <li><a href=""><img src = "/icons/facebook.png" className = "icon" alt="Facebook"></img></a></li>
          <li><a href=""><img src = "/icons/instagram.png" className = "icon" alt="Instagram"></img></a></li>
      </footer>
  </div>
  )}