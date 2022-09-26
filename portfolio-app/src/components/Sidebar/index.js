import { Link, NavLink } from 'react-router-dom';
import '../Sidebar/index.scss';
import logo from '../../assets/images/THlogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faGithub,
  } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFileLines, faHome, faLaptopCode, faUser } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={logo} alt="Taylor Hernandez" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#000000" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#000000" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="project-link" to="/projects">
                <FontAwesomeIcon icon={faLaptopCode} color="#000000" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#000000" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="resume-link" to="/resume">
                <FontAwesomeIcon icon={faFileLines} color="#000000" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/taylor-hernandez-4b1963228/">
                    <FontAwesomeIcon icon={faLinkedin} color="#000000" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/TayHern">
                    <FontAwesomeIcon icon={faGithub} color="#000000" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar 