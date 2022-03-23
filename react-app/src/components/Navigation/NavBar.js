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
        <div className="icon-name-container">
          <div>
            <NavLink to={"/"}>
              <img  src="../../../static/icon.png"></img>
            </NavLink>
          </div>
          <h3 className="app-name">taskless</h3>
        </div>
        <div>
          <LoginModal />
          <SignupModal />
        </div>
      </div>
    );
  } else if (user) {
    sessionLinks = (
      <div className="icon-name-user-container">
        <div className="icon-buttons-container">
          <NavLink to={"/project"}>
            <img src="../../../static/icon.png"></img>
          </NavLink>
          <button>
            <i class="fa-solid fa-house"></i>
          </button>
        </div>
        <div className="user-buttons-container">
          <CreateProjectModal />
          <LogoutButton />
        </div>
      </div>
    );
  } else {
    <></>;
  }

  return (
    <div>
      <nav>
        <ul>
          <div>{sessionLinks}</div>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
