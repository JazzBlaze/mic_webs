import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import './normalize.css';

//fonts
import './fonts/SFPRODISPLAYBOLD.woff';
import './fonts/SFPRODISPLAYREGULAR.woff';
import './fonts/SFProDisplay-Light.woff';


function App() {
    return (
        <>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" />
            </Routes>
        </Router>
            
        </>

    );
}

export default App;