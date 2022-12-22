import { Link } from 'react-router-dom';
import './Hero.css';
import hero_bg from '../images/hero.webp';
import hero_logo from '../images/Microsoft_Logo.png';
import { Button } from './Button.jsx';


function Hero() {
    return (
        <>
        <div className='hero' style={{ backgroundImage: `url(${hero_bg})` }}>
            <div className='container hero-container'>
                <header className='hero_content'>
                    <h1 className='hero_h1' data-aos="fade-right">Together we learn,</h1>
                    <h1 className='hero_h2' data-aos="fade-right">Together we grow.</h1>
                    <p className='hero_tagline' data-aos="fade-right" data-aos-duration="2000">Engaging with the student community in innovative ways!</p>
                    <Link to='/about' className='hero-btn' ><Button >About Us</Button></Link>
                </header>
                <img className='hero_logo' src={hero_logo} alt='' data-aos="fade-left"/>
            </div>
        </div>
        </>
    )
}

export default Hero

