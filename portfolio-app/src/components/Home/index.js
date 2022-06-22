import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-t.png';
import LogoTitle2 from '../../assets/images/logo-h.png';
import './index.scss';

const Home = () => {


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br /> I'm
                <img src={LogoTitle} alt="developer"/>
                aylor
                <img src={LogoTitle2} alt="developer"/>
                ernandez
                <br />
                web developer
                </h1>
                <h2>Frontend Developer / Full Stack Developer</h2> 
                <Link to="#" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home