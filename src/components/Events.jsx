import React,{useState,useEffect,useRef} from 'react'
import './Events.css'
import close from '../images/close.svg'

import eventList from '../eventDetails'

export default function Events() {
  return (
    <section id='events'>
        <div className='events-container'>
            <div className="events-title">
                <h2>Events</h2>
            </div>
            <div className="events-list">
                {eventList.map(ele => <EventCard title={ele.title} link={ele.link} date={ele.date} time={ele.time} fee={ele.fee} venue={ele.venue} img={ele.img} desc={ele.desc}/>)}
            </div>
        </div>
    </section>
  )
}
    
function EventCard(props){
    const {title,img,desc,date,time,venue,link,fee} = props;
    const [isExpanded, setIsExpanded] = useState(false);
    const handleCardClick = () => {
        setIsExpanded(true);
      };
    const handleOutSideClick = () => {
        setIsExpanded(false)
    }
    const cardRef = useRef(null)
    useEffect(() => {
        function handleClickOutside(event){
            if(!cardRef.current.contains(event.target)){
                setIsExpanded(false)
            }
        }
        document.addEventListener("mousedown",handleClickOutside);
        return () => {
            document.removeEventListener("mousedown",handleClickOutside);
        }
    },[cardRef])
    return(
        <div className='event-card' ref={cardRef} >
            {isExpanded?(<div className="extended-card">
                <div className="close-button"><span  onClick={() => handleOutSideClick()}><img src={close} alt="" /></span></div>
                <div className='extended-img'><img src={img} alt=""/></div>
                <div className='extended-content'>
                    <div className="extended-title"><span>{title}</span></div>
                    <div className="extended-mobile-img"><img src={img} alt=""/></div>
                    <div className="extended-desc">{desc}</div>
                    <div className='extended-time'>Time: {time}</div>
                    <div className='extended-date'>Date: {date}</div>
                    <div className='extended-venue'>Venue: {venue}</div>
                    <div className='extended-fee'>Fee: {fee}</div>
                    <div className='extended-button-container'>
                        <a href={link} target='_blank' rel='noreferrer'>
                        <button className='extended-button'>Register</button>
                        </a>
                    </div>
                </div>
            </div>):<></>}
            <div onClick={() => handleCardClick()}>
            <div className="event-img-small">
                <img src={img} alt=""></img>
            </div>
            <div className="event-title">
                <span>{title}</span>
            </div>
            </div>
        </div>
    )
}