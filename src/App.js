import React, { useEffect, useState } from "react";

import Footer from "./components/footer";
import RandomDestination from "./queryForm";

import './App.css';
import './all.css';
import About from "./components/About";
import Contact from "./components/Contact";
import { Routes, Route,Navigate  } from "react-router-dom";
import Home from "./components/Home"
import Header from "./nav";
import LoginForm from "./components/loginform";
import Admin from "./components/adminpage";
import { auth } from "./components/firebaseConfig";
import PrivateRoute from "./components/PrivateRoute";
import { onAuthStateChanged } from "firebase/auth";
import History from "./components/history";

function App() {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // Loading is done once the user state is determined
    });

    return () => unsubscribe(); // Clean up the listener on unmount
  }, []);

  if (loading) {
    // Show a loading screen while Firebase initializes
    return (
<>
<center>
<div class="container-loader-u">
        <div class="dot-loader-u"></div>
        <div class="dot-loader-u"></div>
        <div class="dot-loader-u"></div>
        <div class="dot-loader-u"></div>
    </div>
    </center>

</>

    );

  }


  // Toggle the hamburger menu
 

  return (
    <div className="App">
   

    
<Header></Header>

        <Routes>
   
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/contactquery" element={<ContactForm />} /> */}
          <Route path="/query" element={<RandomDestination />} />
          <Route path="/history" element={<History />} />
         
          <Route path="/adminlogin" element={<LoginForm />} />
       
          <Route path="/adminpage" element={
               <PrivateRoute user={user}>
                <Admin />
               </PrivateRoute>
              } />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>


        <Footer></Footer>
  
    </div>
  )
}

export default App;

