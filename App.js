import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import UploadTask from './components/UploadTask';
import CompleteTask from './components/CompleteTask';
import Volunteer from './components/Volunteer';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upload-task" element={<UploadTask />} />
        <Route path="/complete-task" element={<CompleteTask />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/" element={<Login />} /> {/* Default to Login */}
      </Routes>
    </Router>
  );
}

export default App; 
 