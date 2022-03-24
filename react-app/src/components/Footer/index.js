import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <p>Vu Co</p>
      </div>
      <div>
        <ul className="unordered-list">
          <li>
            <a href="https://github.com/vth-co/Taskless" className="link">Github</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/vu-co/" className="link">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
