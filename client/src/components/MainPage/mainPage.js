import React, { useState } from "react";
import Homepage from "../pages/Homepage";
import Portfolio from "../../pages/Portfolio";
import Create from "../../pages/Create";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";

export default function Navigation(props) {
  function displayCurrentPage() {
    if (props.currentPage == 1) {
      return <Homepage />;
    } else if (props.currentPage == 2) {
      return <Portfolio />;
    } else if (props.currentPage == 3) {
      return <Create />;
    } else if (props.currentPage == 4) {
      return <Login />;
    } else if (props.currentPage == 5) {
      return <Signup />;
    }

    return <div>{displayCurrentPage()}</div>;
  }
}
