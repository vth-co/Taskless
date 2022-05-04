import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="link-and-icon">
        <a
          href="https://github.com/vth-co/Taskless"
          className="link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <i className="fa-brands fa-github-square"></i>
          </div>
          <div>
            <p>Github</p>
          </div>
        </a>
      </div>
      <div className="link-and-icon">
        <a
          href="https://www.linkedin.com/in/vu-co/"
          className="link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <i class="fa-brands fa-linkedin"></i>
            <p>Linkedin</p>
          </div>
        </a>
      </div>
      <div className="link-and-icon">
        <a
          href="https://vth-co.github.io/"
          className="link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <i class="fa-solid fa-circle-user"></i>
            <p>Portfolio</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
