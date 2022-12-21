import Navbar from "./components/Navbar";
import Departments from "./components/Departments"
import VitCards from "./components/VitCards";
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
            <Departments/>
            <VitCards/>
            <Routes>
                <Route path="/" />
            </Routes>
        </Router>
            
        </>

    );
}

export default App;