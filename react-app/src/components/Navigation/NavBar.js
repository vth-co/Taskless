
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import LoginModal from '../LoginModal';
import CreateProjectModal from '../Projects/CreateProject';
import SignupModal from '../SignUpModal';


const NavBar = () => {
  let location = useLocation();
  let sessionLinks;
  if (location.pathname === '/') {
    sessionLinks = (
      <>
      <LoginModal />
      <SignupModal />
        
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
