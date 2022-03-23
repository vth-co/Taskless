import SignUpModal from "../auth/SignUpModal";

const LandingPage = () => {
  return (
    <div>
      <div>
      <h1>Organize it all with Taskless</h1>
      <SignUpModal />
      </div>
      <div>
        <img src="../../../static/landingPage.jpg"></img>
      </div>
    </div>
  );
};

export default LandingPage;
