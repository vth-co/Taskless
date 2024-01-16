import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <ul className="footer-ul">
        <p className="footer-section">Resources</p>
        <li>HTML/CSS</li>
        <li>Flask</li>
        <li>JavaScript</li>
        <li>PostgreSQL</li>
        <li>SQLAlchemy</li>
        <li>React/Redux</li>
      </ul>
      <ul className="footer-ul">
        <p className="footer-section">Company</p>
        <a
          href="https://github.com/vth-co/Taskless"
          className="link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github-square"></i>
          <li>Github</li>
        </a>
        <a
          href="https://www.linkedin.com/in/vu-co/"
          className="link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
          <li>Linkedin</li>
        </a>
      </ul>
    </div>
  );
};

export default Footer;
