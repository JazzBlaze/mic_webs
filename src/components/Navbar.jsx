import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "../images/logo.png";
import bg from '../images/nav_bg.webp';


function Navbar() {
  const[click, setClick] = useState(false);
  
  const handleClick=() => setClick(!click);
  const closeMobileMenu=() => setClick(false);
  return (
    <>
        <nav className="navbar" style={{ backgroundImage: `url(${bg})` }}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src={logo} alt=''/>
                </Link>
                
                <div className='menu-icon' onClick={handleClick}>
                  <iconify-icon  icon={click ? 'line-md:menu-to-close-alt-transition':'line-md:close-to-menu-transition'} width="30" height="30" ></iconify-icon>
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      Home
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/VitCards' className='nav-links' onClick={closeMobileMenu}>
                      About
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/events' className='nav-links' onClick={closeMobileMenu}>
                      Events
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                      Contact
                    </Link>
                  </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar