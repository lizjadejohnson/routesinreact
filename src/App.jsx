import { useState } from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import Education from './components/pages/Education';
import Employment from './components/pages/Employment';
import Main from './components/pages/Main';
import Skills from './components/pages/Skills';
import Nav from './components/Nav';
import Footer from './components/Footer';

//Importing our employment and education history data:
import { educationHistory } from './assets/educationHistory';
import { employmentHistory } from './assets/employmentHistory.js';



function App() {
  
  return (
    <div className='App'>
      <Nav />
      <div className='MainContent'>
      <Routes>
         {/* Wrap our App components in Route paths */}
        <Route path="/" element={ <Main /> } />
        <Route path="/skills" element={<Skills />} />
        {/* Be sure to pass our employment/education history data as props: */}
        <Route path="/employment" element={<Employment history={employmentHistory}/>}/>
        <Route path="/education" element={<Education history={educationHistory}/>}/>
      </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
