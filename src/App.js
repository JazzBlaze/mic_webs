import Navbar from "./components/Navbar";
import Departments from "./components/Departments";
import Hero from "./components/Hero"
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
            
            <Routes>
                <Route path="/" />
            </Routes>
        </Router>
            
        </>

    );
}

export default App;