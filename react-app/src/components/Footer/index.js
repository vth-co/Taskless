import { Link } from "react-router-dom";
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
            <Link to="https://github.com/vth-co/Taskless" className="link">Github</Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/vu-co/" className="link">LinkedIn</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
