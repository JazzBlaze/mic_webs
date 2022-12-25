import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Stats from "./components/Stats";
import VitCards from "./components/VitCards";
import OurTeams from "./components/OurTeams"
import Departments from "./components/Departments";
import Events from "./components/Events";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

//fonts
import './fonts/SFPRODISPLAYBOLD.woff';
import './fonts/SFPRODISPLAYREGULAR.woff';
import './fonts/SFProDisplay-Light.woff';


function App() {
    AOS.init({  // Global settings:
        disable: false,
        startEvent: 'DOMContentLoaded', 
        initClassName: 'aos-init', 
        animatedClassName: 'aos-animate', 
        useClassNames: false, 
        disableMutationObserver: false, 
        debounceDelay: 50, 
        throttleDelay: 99, 
        
        offset: 120, 
        delay: 200, 
        duration: 1500, 
        easing: 'ease', 
        once: false, 
        mirror: false, 
        anchorPlacement: 'top-bottom',
    });
    return (
        <>
        <Router>
            <Navbar />
            <Hero/>
            <Intro />
            <Stats />
            <VitCards/>
            <OurTeams/>
            <Events/>
            <Departments/>
            <Footer/>
            <Routes>
                <Route path="/" />
            </Routes>
        </Router>

        </>

    );
    
}

export default App;