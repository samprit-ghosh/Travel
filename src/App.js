import React from "react";

import Footer from "./components/footer";
import RandomDestination from "./queryForm";

import './App.css';
import './all.css';
// import { GoogleLogin } from '@react-oauth/google';
import About from "./components/About";
import Contact from "./components/Contact";
import { Routes, Route,Navigate  } from "react-router-dom";
import Home from "./components/Home"
import Header from "./nav";





function App() {

  



  // Toggle the hamburger menu
 

  return (
    <div className="App">
   

    
<Header></Header>
        <Routes>
   
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/query" element={<RandomDestination />} />
   
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>


  

        <Footer></Footer>
  
    </div>
  )
}

export default App;

