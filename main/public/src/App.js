import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Sigin from './pages/Sigin.jsx';

import Analytics from './pages/Analytics.jsx';
import Question from './pages/Question.jsx';


import Navbar from './components/Navbar';
import Exam from './pages/Exam.jsx';
import Timeout from './pages/Timeout';
import Courses from './pages/Courses';
import Loginstate from "../src/context/Login"
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <>
   
    <BrowserRouter>
    
   <Navbar>    </Navbar>
     <Routes>
     
         <Route path="/" element={<Sigin />} />
         <Route path="/dashboard" element={<Dashboard/>} />
         <Route path="/exam" element={<Exam/>} />
         <Route path="/question" element={<Question/>}/>
         <Route path="/analytics" element={<Analytics />} />
         <Route path="/timeout" element={<Timeout/>}/>
         <Route path="/course" element={<Courses/>}/>
         
       </Routes>
    
    
       
   </BrowserRouter>
  
    </>
  );
};

export default App;