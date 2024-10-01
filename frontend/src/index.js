import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'; 
import Dashboard from './dashboard/Dashboard';
import { DarkModeProvider } from '../src/dashboard/DarkModeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <DarkModeProvider>
    
   
    <Router>
    <Routes>
      {/* Define routes */}

      <Route path="/" element={ <App />} />
      <Route path="/dashboard" element={<Dashboard />} />
      
   
    </Routes>
     
    </Router>
    </DarkModeProvider>
  </React.StrictMode>
);
