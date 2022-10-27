import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <ul className="footer-ul">
        <p className="footer-section">Resources</p>
        <li>Alembic</li>
        <li>CSS</li>
        <li>Flask</li>
        <li>JavaScript</li>
        <li>PostgreSQL</li>
        <li>SQLAlchemy</li>
        <li>React</li>
        <li>Redux</li>
      </ul>
      <div className="link-and-icon">
        <p className="footer-section">Company</p>
        <a
          href="https://github.com/vth-co/Taskless"
          className="link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github-square"></i>
          <p>Github</p>
        </a>
        <a
          href="https://www.linkedin.com/in/vu-co/"
          className="link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-linkedin"></i>
          <p>Linkedin</p>
        </a>
      </div>
    </div>
  );
};

export default Footer;
