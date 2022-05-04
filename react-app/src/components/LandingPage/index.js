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
      <div>
        <h2 className="sentence">Free up your mental space</h2>
        <p>Regain clarity and calmness by getting all those tasks out of your head and onto your to-do list(no matter where you are or what device you use).</p>
      </div>
          <Footer />
    </div>
  );
};

export default LandingPage;
