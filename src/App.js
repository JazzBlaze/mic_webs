import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Stats from "./components/Stats";
import VitCards from "./components/VitCards";
import Departments from "./components/Departments";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';


//fonts
import './fonts/SFPRODISPLAYBOLD.woff';
import './fonts/SFPRODISPLAYREGULAR.woff';
import './fonts/SFProDisplay-Light.woff';


function App() {
    return (
        <>
        <Router>
            <Navbar />
            <Hero />
            <Intro />
            <Stats />
            <VitCards/>
            <Departments/>
            
            <Routes>
                <Route path="/" />
            </Routes>
        </Router>
            
        </>

    );
}

export default App;