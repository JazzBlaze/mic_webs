import React, { useRef, useEffect } from 'react'
import './Departments.css'

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
                        <DepartmentItem name="Web/App Development" icon="images/dev.png" />
                        <DepartmentItem name="Cyber Security" icon="images/cyber.png" />
                        <DepartmentItem name="Competitive Programming" icon="images/cp.png" />
                        <DepartmentItem name="Artificial Intelligence" icon="images/ai.png" />
                    </div>
                    <div className="list-down" ref={scrollRef}>
                        <DepartmentItem name="Video Editing" icon="images/video.png" />
                        <DepartmentItem name="Marketing & PR" icon="images/market.png" />
                        <DepartmentItem name="Design" icon="images/design.png" />
                        <DepartmentItem name="Content Writing" icon="images/content.png" />
                    </div>
                </div>
                <div className='department-list-mobile'>
                    <div class="slider">
                        <div class="slides">
                            <div>
                                <DepartmentItemMobile name="Web/App Development" icon="images/dev.png"/>
                            </div>
                            <div>
                                <DepartmentItemMobile name="Cyber Security" icon="images/cyber.png"/>
                            </div>
                            <div>
                                <DepartmentItemMobile name="Competitive Programming" icon="images/cp.png"/>
                            </div>
                            <div>
                                <DepartmentItemMobile name="Artificial Intelligence" icon="images/ai.png"/>
                            </div>
                            <div>
                                <DepartmentItemMobile name="Video Editing" icon="images/video.png"/>
                            </div>
                            <div>
                                <DepartmentItemMobile name="Marketing & PR" icon="images/market.png"/>
                            </div>
                            <div>
                                <DepartmentItemMobile name="Design" icon="images/design.png"/>
                            </div>
                            <div>
                                <DepartmentItemMobile name="Content Writing" icon="images/content.png"/>
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
                <div className="department-icon"><img src={props.icon} /></div>

                <div className='department-name'><h4>{props.name}</h4></div>
            </div>
        </div>
    )
}

function DepartmentItemMobile(props){
    return(
        <div className='department-container-mobile'>
            <div className="department-item-mobile">
                <div className="department-icon-mobile"><img src={props.icon} /></div>
                <div className="department-name-mobile"><h3>{props.name}</h3></div>
            </div>
        </div>
    )
}