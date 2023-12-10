import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Team from './Team';
import Project from './Project';
import Home from './home';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/project" element={<Project />} />
      <Route path="/team" element={
        <>
          <Team />
          <Team />
          <Team />
        </>
      } />
      <Route path='/home' element={<Home />}></Route>
    </Routes>
  </Router>
);

reportWebVitals();
