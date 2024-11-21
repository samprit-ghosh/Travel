import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import RandomDestination from "./queryForm";

import './App.css';
import './all.css';
// import { GoogleLogin } from '@react-oauth/google';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home"
import Header from "./nav";

import TravelSlider from "./components/admin";



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
          <Route path="/admin" element={<TravelSlider />} />
   
        </Routes>


  

        <Footer></Footer>
  
    </div>
  )
}

export default App;

