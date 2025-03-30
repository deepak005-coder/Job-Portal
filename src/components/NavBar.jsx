/* eslint-disable no-unused-vars */
import React from "react";
import { assets } from "../assets/assets.js";
import "../components/NavBar.css";

import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import Application from "../pages/Application.jsx";

const NavBar = () => {
  
  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div className="nav-bar-container">
      <div className="nav-logo-container">
        <img src={assets.logo} alt="" />
      </div>

      {user ? (
        <div className="nav-button-container">
          <div className="applied-job-btn">
            <Link to={"/Application"} className="link">
              Applied Jobs
            </Link>
          </div>

          <p>|</p>
          <p>Hi, {user.firstName + " " + user.lastName}</p>
          <UserButton />
        </div>
      ) : (
        <div className="nav-button-container">
          <button className="recruite-btn">Recruiter Login</button>
          <button onClick={openSignIn} className="reg-btn">
            {" "}
            Register{" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default NavBar;
