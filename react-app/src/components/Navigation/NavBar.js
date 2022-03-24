import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import LoginModal from "../auth/LoginModal";
import CreateProjectModal from "../Projects/CreateProject";
import SignupModal from "../auth/SignUpModal";
import { useSelector } from "react-redux";
import "./NavBar.css";

const NavBar = () => {
  const user = useSelector((state) => state.session.user);
  let location = useLocation();
  let sessionLinks;
  if (location.pathname === "/") {
    sessionLinks = (
      <div className="icon-name-user-container">
        <div className="icon-container">
          <div className="icon">
            <NavLink to={"/"}>
              <img src="../../../static/icon.png" alt=""></img>
            </NavLink>
          </div>
          <div>
            <h2 className="app-name">taskless</h2>
          </div>
        </div>
        <div>
          <LoginModal />
          <SignupModal />
        </div>
      </div>
    );
  } else if (user) {
    sessionLinks = (
      <div className="icon-name-loggedin-container">
        <div className="icon-buttons-container">
          <div className="icon">
            <button className="toggle">
              <img src="../../../static/loggedin.png" alt=""></img>
            </button>
          </div>
          <div>
            <NavLink to={"/project"}>
              <button className="home-button">
                <i className="fa-solid fa-house"></i>
              </button>
            </NavLink>
          </div>
        </div>
        <div className="user-buttons-container">
          <div>
            <CreateProjectModal />
          </div>
          <div>
            <LogoutButton />
          </div>
        </div>
      </div>
    );
  } else {
    <></>;
  }

  return (
    <div>
      <nav>{sessionLinks}</nav>
    </div>
  );
};

export default NavBar;
