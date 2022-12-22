import './Intro.css';
import emoji from '../images/emoji.gif';
function Intro () {
    return(
        <>
        <div className='intro'>
            <div className='intro-container'>
                <h1 className='intro-h1'>Projects that'll blow your mind.</h1>
                <img className='intro-img b' src={emoji} alt='' />
                <h4 className='intro-desc c'>Get ready to create and explore a variety of interesting events, hackathons, coding competitions, AI and ML, sharpen up your web development skills and other technologies by getting indulged into our world.</h4>
            </div>
        </div>
        </>
    )
}

export default Intro