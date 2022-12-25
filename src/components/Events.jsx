import React,{useState,useEffect,useRef} from 'react'
import './Events.css'
import eventsImg from '../images/events-img.png' 
export default function Events() {
  return (
    <section id='events'>
        <div className='events-container'>
            <div className="events-title">
                <h2>Events</h2>
            </div>
            <div className="events-list">
                <EventCard title="Hackathon" img={eventsImg} desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aliquid, necessitatibus sequi blanditiis cumque culpa nostrum, provident laborum cupiditate ad, voluptates commodi autem libero quia suscipit consequuntur eius amet beatae."/>
                <EventCard title="Hackathon" img={eventsImg} desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aliquid, necessitatibus sequi blanditiis cumque culpa nostrum, provident laborum cupiditate ad, voluptates commodi autem libero quia suscipit consequuntur eius amet beatae."/>
                <EventCard title="Hackathon" img={eventsImg} desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aliquid, necessitatibus sequi blanditiis cumque culpa nostrum, provident laborum cupiditate ad, voluptates commodi autem libero quia suscipit consequuntur eius amet beatae."/>
                <EventCard title="Hackathon" img={eventsImg} desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aliquid, necessitatibus sequi blanditiis cumque culpa nostrum, provident laborum cupiditate ad, voluptates commodi autem libero quia suscipit consequuntur eius amet beatae."/>
                <EventCard title="Hackathon" img={eventsImg} desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aliquid, necessitatibus sequi blanditiis cumque culpa nostrum, provident laborum cupiditate ad, voluptates commodi autem libero quia suscipit consequuntur eius amet beatae."/>
                <EventCard title="Hackathon" img={eventsImg} desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aliquid, necessitatibus sequi blanditiis cumque culpa nostrum, provident laborum cupiditate ad, voluptates commodi autem libero quia suscipit consequuntur eius amet beatae."/>
                <EventCard title="Hackathon" img={eventsImg} desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aliquid, necessitatibus sequi blanditiis cumque culpa nostrum, provident laborum cupiditate ad, voluptates commodi autem libero quia suscipit consequuntur eius amet beatae."/>
                <EventCard title="Hackathon" img={eventsImg} desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aliquid, necessitatibus sequi blanditiis cumque culpa nostrum, provident laborum cupiditate ad, voluptates commodi autem libero quia suscipit consequuntur eius amet beatae."/>
                <EventCard title="Hackathon" img={eventsImg} desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aliquid, necessitatibus sequi blanditiis cumque culpa nostrum, provident laborum cupiditate ad, voluptates commodi autem libero quia suscipit consequuntur eius amet beatae."/>
                <EventCard title="Hackathon" img={eventsImg} desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aliquid, necessitatibus sequi blanditiis cumque culpa nostrum, provident laborum cupiditate ad, voluptates commodi autem libero quia suscipit consequuntur eius amet beatae."/>
                <EventCard title="Hackathon" img={eventsImg} desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aliquid, necessitatibus sequi blanditiis cumque culpa nostrum, provident laborum cupiditate ad, voluptates commodi autem libero quia suscipit consequuntur eius amet beatae."/>
                <EventCard title="Hackathon" img={eventsImg} desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aliquid, necessitatibus sequi blanditiis cumque culpa nostrum, provident laborum cupiditate ad, voluptates commodi autem libero quia suscipit consequuntur eius amet beatae."/>
                <EventCard title="Hackathon" img={eventsImg} desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aliquid, necessitatibus sequi blanditiis cumque culpa nostrum, provident laborum cupiditate ad, voluptates commodi autem libero quia suscipit consequuntur eius amet beatae."/>
                <EventCard title="Hackathon" img={eventsImg} desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aliquid, necessitatibus sequi blanditiis cumque culpa nostrum, provident laborum cupiditate ad, voluptates commodi autem libero quia suscipit consequuntur eius amet beatae."/>
                <EventCard title="Hackathon" img={eventsImg} desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aliquid, necessitatibus sequi blanditiis cumque culpa nostrum, provident laborum cupiditate ad, voluptates commodi autem libero quia suscipit consequuntur eius amet beatae."/>
                <EventCard title="Hackathon" img={eventsImg} desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aliquid, necessitatibus sequi blanditiis cumque culpa nostrum, provident laborum cupiditate ad, voluptates commodi autem libero quia suscipit consequuntur eius amet beatae."/>
                <EventCard title="Hackathon" img={eventsImg} desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aliquid, necessitatibus sequi blanditiis cumque culpa nostrum, provident laborum cupiditate ad, voluptates commodi autem libero quia suscipit consequuntur eius amet beatae."/>
                <EventCard title="Hackathon" img={eventsImg} desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aliquid, necessitatibus sequi blanditiis cumque culpa nostrum, provident laborum cupiditate ad, voluptates commodi autem libero quia suscipit consequuntur eius amet beatae."/>
                <EventCard title="Hackathon" img={eventsImg} desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aliquid, necessitatibus sequi blanditiis cumque culpa nostrum, provident laborum cupiditate ad, voluptates commodi autem libero quia suscipit consequuntur eius amet beatae."/>
                <EventCard title="Hackathon" img={eventsImg} desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aliquid, necessitatibus sequi blanditiis cumque culpa nostrum, provident laborum cupiditate ad, voluptates commodi autem libero quia suscipit consequuntur eius amet beatae."/>
                <EventCard title="Hackathon" img={eventsImg} desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aliquid, necessitatibus sequi blanditiis cumque culpa nostrum, provident laborum cupiditate ad, voluptates commodi autem libero quia suscipit consequuntur eius amet beatae."/>
                <EventCard title="Hackathon" img={eventsImg} desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aliquid, necessitatibus sequi blanditiis cumque culpa nostrum, provident laborum cupiditate ad, voluptates commodi autem libero quia suscipit consequuntur eius amet beatae."/>
                <EventCard title="Hackathon" img={eventsImg} desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aliquid, necessitatibus sequi blanditiis cumque culpa nostrum, provident laborum cupiditate ad, voluptates commodi autem libero quia suscipit consequuntur eius amet beatae."/>
                <EventCard title="Hackathon" img={eventsImg} desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aliquid, necessitatibus sequi blanditiis cumque culpa nostrum, provident laborum cupiditate ad, voluptates commodi autem libero quia suscipit consequuntur eius amet beatae."/>
                <EventCard title="Hackathon" img={eventsImg} desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aliquid, necessitatibus sequi blanditiis cumque culpa nostrum, provident laborum cupiditate ad, voluptates commodi autem libero quia suscipit consequuntur eius amet beatae."/>
                <EventCard title="Hackathon" img={eventsImg} desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aliquid, necessitatibus sequi blanditiis cumque culpa nostrum, provident laborum cupiditate ad, voluptates commodi autem libero quia suscipit consequuntur eius amet beatae."/>
                <EventCard title="Hackathon" img={eventsImg} desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima aliquid, necessitatibus sequi blanditiis cumque culpa nostrum, provident laborum cupiditate ad, voluptates commodi autem libero quia suscipit consequuntur eius amet beatae."/>
            </div>
        </div>
    </section>
  )
}
    
function EventCard(props){
    const {title,img,desc} = props;
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
        <div className='event-card' ref={cardRef} onClick={() => handleCardClick()}>
            {isExpanded?(<div className="extended-card">
                <div className='extended-img'><img src={img} alt=""/></div>
                <div className='extended-content'>
                    <div className="extended-title"><span>{title}</span></div>
                    <div className="extended-mobile-img"><img src={img} alt=""/></div>
                    <div className="extended-desc">{desc}</div>
                </div>
            </div>):<></>}
            <div className="event-img-small">
                <img src={eventsImg} alt=""></img>
            </div>
            <div className="event-title">
                <span>{title}</span>
            </div>
        </div>
    )
}