import { Link } from "react-router-dom";
import Footer from "../Footer"
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="h1-loginform-container">
        <h1 className="sentence">Organize it all with Taskless</h1>
        <Link to={"/users/register"}>
          <button className="get-started-button">Get Started</button>
        </Link>
      </div>
      <div className="landing-page-image-container">
        <img className="background-img" src="../../../static/landingPage.jpg" alt=""></img>
      </div>
          <Footer />
    </div>
  );
};

export default LandingPage;
