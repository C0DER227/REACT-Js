import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Main from './components/Main';
import Home from './components/Home'
import Features from './components/Features'
import About from './components/About'
import Contact from './components/Contact'
import Why from './components/Why';
import Memberships from './components/Memberships';
import Footer from './components/Footer';


import './App.css';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Features" element={<Features/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </Router>
      <Why />
      <Memberships />
      <Footer />
    </div>
  );
}

export default App;
