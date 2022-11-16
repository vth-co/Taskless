import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../../store/session";

const LogoutButton = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    await dispatch(logout());
    history.push("/");
  };

  return (
    <div className="button-container">
      <button onClick={onLogout} className="logout-button">
        <svg width="24" height="24" aria-hidden="true">
          <g fill="none" fill-rule="evenodd">
            <path
              stroke="currentColor"
              d="M6.5 8.3V5.63c0-1.17.9-2.13 2-2.13h7c1.1 0 2 .95 2 2.13v11.74c0 1.17-.9 2.13-2 2.13h-7c-1.1 0-2-.95-2-2.13V14.7"
            ></path>
            <path
              fill="currentColor"
              d="M12.8 11l-2.15-2.15a.5.5 0 11.7-.7L14 10.79a1 1 0 010 1.42l-2.65 2.64a.5.5 0 01-.7-.7L12.79 12H4.5a.5.5 0 010-1h8.3z"
            ></path>
          </g>
        </svg>
      </button>
      <span className="tooltip">Log out</span>
    </div>
  );
  // <button className='logout-button' onClick={onLogout}><i class="fa-solid fa-arrow-right-from-bracket"></i></button>;
};

export default LogoutButton;
