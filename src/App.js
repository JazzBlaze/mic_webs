import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import './normalize.css';


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