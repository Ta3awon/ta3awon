import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/upload-task">Upload Task</Link></li>
        <li><Link to="/complete-task">Complete Task</Link></li>
        <li><Link to="/volunteer">Volunteer</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
 