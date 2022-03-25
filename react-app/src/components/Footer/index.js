import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <p>Vu Co</p>
      </div>
      <div>
        <ul className="unordered-list">
          <li>
            <a
              href="https://github.com/vth-co/Taskless"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/vu-co/"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
