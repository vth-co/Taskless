import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import CreateProjectModal from "../Projects/CreateProject";
import { useSelector } from "react-redux";
import "./NavBar.css";

const NavBar = () => {
  const user = useSelector((state) => state.session.user);
  let location = useLocation();
  let sessionLinks;
  if (location.pathname === "/") {
    sessionLinks = (
      <div className="icon-name-user-container">
                <div>
            <Link className="icon-container" to={"/"}>
              <img src="../../../static/icon.png" alt=""></img>
              <div className="app-name">
              <h2>taskless</h2>
              </div>
            </Link>
        </div>
        <div>
          <NavLink to={"/users/login"}>
            <button className="login-signup-button">Log in</button>
          </NavLink>
          <NavLink to={"/users/register"}>
            <button className="login-signup-button">Sign up</button>
          </NavLink>
        </div>
      </div>
    );
  } else if (user) {
    sessionLinks = (
      <div className="icon-name-loggedin-container">
        <div className="icon-buttons-container">
          <div className="icon-container">
            <button className="toggle">
              <img src="../../../static/loggedin.png" alt=""></img>
            </button>
          </div>
          <div>
            <NavLink to={"/app"}>
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
