import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import { useSelector } from "react-redux";
import CreateTaskModal from "../Tasks/CreateTask";
import "./NavBar.css";

const NavBar = () => {
  const user = useSelector((state) => state.session.user);

  let location = useLocation();
  let sessionLinks;
  if (location.pathname === "/") {
    sessionLinks = (
      <div className="icon-name-user-container">
        <div >
          <Link className="icon-container" to={"/"}>
            <img src="../../../static/icon.png" alt=""></img>
            <h2 className="app-name">taskless</h2>
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
          <div>
            {/* <svg 
            className="toggle" 
            >
              <line
                x1="4"
                y1="18"
                x2="20"
                y2="18"
                stroke="white"
                stroke-width="1"
              ></line>
              <line
                x1="4"
                y1="11.5"
                x2="20"
                y2="11.5"
                stroke="white"
                stroke-width="1"
              ></line>
              <line
                x1="4"
                y1="5"
                x2="20"
                y2="5"
                stroke="white"
                stroke-width="1"
              ></line>
            </svg> */}
          </div>
          <div>
            <NavLink to={"/app"}>
                <svg className="home-button">
                  <line
                    x1="4"
                    y1="11.5"
                    x2="12.25"
                    y2="4"
                    stroke="white"
                    stroke-width="1"
                  ></line>
                  <line
                    x1="4"
                    y1="11.25"
                    x2="4"
                    y2="19"
                    stroke="white"
                    stroke-width="1"
                  ></line>
                  <line
                    x1="10"
                    y1="19"
                    x2="3.5"
                    y2="19"
                    stroke="white"
                    stroke-width="1"
                  ></line>
                  <line
                    x1="9.5"
                    y1="19"
                    x2="9.5"
                    y2="13"
                    stroke="white"
                    stroke-width="1"
                  ></line>
                  <line
                    x1="11.75"
                    y1="4"
                    x2="20"
                    y2="11.5"
                    stroke="white"
                    stroke-width="1"
                  ></line>
                  <line
                    x1="15"
                    y1="13"
                    x2="9"
                    y2="13"
                    stroke="white"
                    stroke-width="1"
                  ></line>
                  <line
                    x1="14.5"
                    y1="13"
                    x2="14.5"
                    y2="19"
                    stroke="white"
                    stroke-width="1"
                  ></line>
                  <line
                    x1="20.5"
                    y1="19"
                    x2="14"
                    y2="19"
                    stroke="white"
                    stroke-width="1"
                  ></line>
                  <line
                    x1="20"
                    y1="19"
                    x2="20"
                    y2="11.25"
                    stroke="white"
                    stroke-width="1"
                  ></line>
                </svg>
            </NavLink>
          </div>
        </div>
        <div className="user-buttons-container">
          <div>
            <CreateTaskModal />
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
