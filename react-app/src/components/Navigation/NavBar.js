
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import CreateProjectModal from '../Projects/CreateProject';


const NavBar = () => {
  let location = useLocation();
  let sessionLinks;
  if (location.pathname === '/') {
    sessionLinks = (
      <>
      {/* <LoginModal />
      <SignupModal /> */}
        
      </>
    )
  } else {
    sessionLinks = (
      <>
        <li>
          <CreateProjectModal />
        </li>
      </>
    )
  }


  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>
        <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li>
        <ul>
          <div>
            {sessionLinks}
          </div>
        </ul>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
