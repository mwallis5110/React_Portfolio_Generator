import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

import "./Signup.css";

export default function Signup() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      localStorage.setItem("userId", data.addUser.user._id);
      localStorage.setItem("email", data.addUser.user.email);

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="d-flex justify-content-center mb-4 primary-container">
      
        <div className="card">
          <h4 className="bg-dark text-light p-2 welcome">Sign Up</h4>
          <div className="card-body">
            <form>
              <input
                className="form-input"
                placeholder="Your username"
                name="username"
                type="text"
                value={formState.name}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button
                className="btn btn-block btn-primary"
                style={{ cursor: "pointer" }}
                type="button"
                onClick={(e) => {
                  handleFormSubmit(e);
                }}
              >
                Submit
              </button>
              <Link to="/" className="sign-up-link">
                Already have an account? Login up here.
              </Link>
            </form>

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      
    </main>
  );
}
