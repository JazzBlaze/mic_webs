import React from 'react'
import "./Footer.css"
import location from '../images/location-on.svg'
import instagramIcon from '../images/instagram-filled.svg'
import discord from '../images/baseline-discord.svg'
import mail from '../images/round-mail.svg'
import micLogo  from '../images/mic-logo.png'

export default function Footer() {
  return (
    <div id="contact" className='footer-container'>
      <div className="mic-logo">
        <img src={micLogo} alt="" />
      </div>
        <div className="get-in-touch">
            <div className="get-in-touch-title">
              <span><b>Get in touch</b></span>
            </div>
            <div className='get-in-touch-content'>
              <h6>Do you have any questions or feedback? &nbsp;We'd love to here it from you!
              </h6>
            </div>
            <div className='get-in-touch-icon'>
              <a href='https://goo.gl/maps/V2m2Ce2Hi5yRDK9E9/'><img src={location} alt=""/></a>
              <a href='https://www.instagram.com/microsoft.innovations.vitc/'><img src={instagramIcon} alt="" /></a>
              <a href='https://discord.gg/c6EAayHHR3/'><img src={discord} alt=""/></a>
              <a href='mailto:micvitcc@gmail.com'><img src={mail} alt="" /></a>
            </div>
        </div>
    </div>
  )
}
