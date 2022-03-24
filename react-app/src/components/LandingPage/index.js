import LoginForm from "../auth/LoginModal/LoginForm";
import SignUpModal from "../auth/SignUpModal";
import "./LandingPage.css"

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="h1-loginform-container">
      <h1 className="sentence" >Organize it all with Taskless</h1>
      <LoginForm />
      </div>
      <div className="landing-page-image-container">
        <img src="../../../static/landingPage.jpg"></img>
      </div>
    </div>
  );
};

export default LandingPage;
