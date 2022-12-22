import React from 'react'
import "./Footer.css"
import facebookIcon from '../images/Facebook_logo.svg'
import instagramIcon from '../images/instagram-logo.svg'
import twitterIcon from '../images/twitter_logo.svg'
import micLogo  from '../images/mic-logo.png'

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className="mic-logo">
        <img src={micLogo} />
      </div>
        <div className="get-in-touch">
            <div className="get-in-touch-tilte">
              <span><b>Get in touch</b></span>
            </div>
            <div className='get-in-touch-content'>
              <h6>Do you have any questions or feedback? &nbsp;We'd love to here it from you!
              </h6>
            </div>
            <div className='get-in-touch-icon'>
              <a href='https://www.instagram.com/microsoft.innovations.vitc/'><img src={facebookIcon}/></a>
              <a href='https://www.instagram.com/microsoft.innovations.vitc/'><img src={instagramIcon} /></a>
              <a href='https://www.instagram.com/microsoft.innovations.vitc/'><img src={twitterIcon} /></a>
            </div>
        </div>
    </div>
  )
}
