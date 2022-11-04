import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from './home/home';
import Contact from './contact/contact';

function App () {
  return (
      <Router>
          <Routes>  
          <Route path="/" element={<Home />} />    
          <Route path="/contact" element={<Contact />} />    
          </Routes>
      </Router>
    
  );
}

export default App;
