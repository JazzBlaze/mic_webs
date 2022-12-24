import './Intro.css';
import emoji from '../images/emoji.png';
function Intro () {
    return(
        <>
        <div className='intro'>
            <div className='intro-container'>
                <h1 className='intro-h1' data-aos="zoom-in" data-aos-duration="1000">Projects that'll blow your mind.</h1>
                <img className='intro-img' src={emoji} alt='' data-aos="fade-left" data-aos-duration="1000" />
                <h4 className='intro-desc' data-aos="zoom-in" data-aos-duration="1000">Get ready to create and explore a variety of interesting events, hackathons, coding competitions, AI and ML, sharpen up your web development skills and other technologies by getting indulged into our world.</h4>
            </div>
        </div>
        </>
    )
}

export default Intro