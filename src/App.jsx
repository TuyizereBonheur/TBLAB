import {BrowserRouter,Routes, Route, Link } from 'react-router-dom'
import React from 'react'
import About_us from './Components/About_us'
import Login from './Components/Login'
import Nav from './Components/Nav'
import Signup from './Components/Signup'
import About from './Components/About'
import Home from './Components/Home'
import Footer from './Components/Footer'


function App() {
  return (
    <>
     
      <Routes>
      
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/About" element={<About />} />
        <Route path="/Nav" element={<Nav />} />
        <Route path="/About_us" element={<About_us />} />
        <Route index element={<Home />} />
        <Route path="/Footer" element={<Footer />} />

        
      </Routes>
      <footer/>
    </>
  );
}

export default App;
