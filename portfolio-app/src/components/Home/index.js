import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import LogoTitle from '../../assets/images/logo-t.png';
import LogoTitle2 from '../../assets/images/logo-h.png';
import './index.scss';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['a', 'y', 'l', 'o', 'r']
    const nameArray2 = ['e', 'r', 'n', 'a', 'n', 'd', 'e', 'z']
    const jobArray = [
        'w',
        'e',
        'b',
        ' ',
        'd',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r']

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>

                <img src={LogoTitle} alt="developer first name"/>
                <AnimatedLetters letterClass = {letterClass}
                strArray={nameArray}
                idx={10} />
                <img src={LogoTitle2} alt="developer last name"/>
                <AnimatedLetters letterClass = {letterClass}
                strArray={nameArray2}
                idx={15} />
                <br />
                <AnimatedLetters letterClass = {letterClass}
                strArray={jobArray}
                idx={23} />
                </h1>
                <h2>Frontend Developer / Full Stack Developer</h2> 
                <Link to="#" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home