import { NavLink } from "react-router-dom";
import "./404.css";

const ErrorPage = () => {
  return (
    <div>
      <div className="errorpage-content">
        <div className="img-container">
          <img src="../../../static/errorPage.png" alt=""></img>
        </div>
        <div>
          <h1>Hmmm, that page doesn't exist.</h1>
        </div>
        <div>
          <p>Get back to organizing work and life.</p>
        </div>
        <div>
          <NavLink to="/">
            <button className="button">Home</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
