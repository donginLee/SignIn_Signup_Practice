import React from 'react';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import LogIn from './components/login';
import Homepage from './components/homepage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn/>} />
        <Route path="/home" element={<Homepage/>} />
      </Routes>
    </Router>
   
    
   
  );
}

export default App;
