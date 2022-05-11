import { Link, NavLink } from 'react-router-dom';
import '../Sidebar/index.scss';
import logo from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faLaptopCode, faUser } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={logo} alt="Taylor Hernandez" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#E8EDED" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#E8EDED" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/projects">
                <FontAwesomeIcon icon={faLaptopCode} color="#E8EDED" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color="#E8EDED" />
            </NavLink>
        </nav>
    </div>
)

export default Sidebar 