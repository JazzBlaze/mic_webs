import React, { useRef, useEffect } from 'react'
import './Departments.css'
import dev from '../images/dev.png'
import cyber from '../images/cyber.png'
import cp from '../images/cp.png'
import ai from '../images/ai.png'
import video from '../images/video.png'
import market from '../images/market.png'
import design from '../images/design.png'
import content from '../images/content.png'
import ui from '../images/ui-ux.png'

export default function Departments() {
    const scrollRef = useRef(null)
    useEffect(() => {
        scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }, [])
    return (
        <section id='departments'>
            <div className="departments">
                <div className="title"><h2>Our Departments</h2></div>
                <div className="department-list">
                    <div className="list-up">
                        <DepartmentItem name="Web/App Development" icon={dev}/>
                        <DepartmentItem name="Cyber Security" icon={cyber} />
                        <DepartmentItem name="Competitive Programming" icon={cp} />
                        <DepartmentItem name="UI/UX" icon={ui} />
                        <DepartmentItem name="Artificial Intelligence" icon={ai} />
                    </div>
                    <div className="list-down" ref={scrollRef}>
                        <DepartmentItem name="Video Editing" icon={video} />
                        <DepartmentItem name="Marketing & PR" icon={market} />
                        <DepartmentItem name="Design" icon={design} />
                        <DepartmentItem name="Content Writing" icon={content} />
                    </div>
                </div>
                <div className='department-list-mobile'>
                    <div className="slider">
                        <div className="slides">
                            <div>
                                <DepartmentItemMobile name="Web/App Development" icon={dev}/>
                            </div>
                            <div>
                                <DepartmentItemMobile name="Cyber Security" icon={cyber}/>
                            </div>
                            <div>
                                <DepartmentItemMobile name="Competitive Programming" icon={cp}/>
                            </div>
                            <div>
                                <DepartmentItemMobile name="UI/UX" icon={ui}/>
                            </div>
                            <div>
                                <DepartmentItemMobile name="Artificial Intelligence" icon={ai}/>
                            </div>
                            <div>
                                <DepartmentItemMobile name="Video Editing" icon={video}/>
                            </div>
                            <div>
                                <DepartmentItemMobile name="Marketing & PR" icon={market}/>
                            </div>
                            <div>
                                <DepartmentItemMobile name="Design" icon={design}/>
                            </div>
                            <div>
                                <DepartmentItemMobile name="Content Writing" icon={content}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

function DepartmentItem(props) {
    return (
        <div >
            <div className='department-item'>
                <div className="department-icon"><img src={props.icon} alt=""/></div>

                <div className='department-name'><h4>{props.name}</h4></div>
            </div>
        </div>
    )
}

function DepartmentItemMobile(props){
    return(
        <div className='department-container-mobile'>
            <div className="department-item-mobile">
                <div className="department-icon-mobile"><img src={props.icon} alt="" /></div>
                <div className="department-name-mobile"><h3>{props.name}</h3></div>
            </div>
        </div>
    )
}