import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (  
    <nav className="site-nav" aria-label="Main navigation">
      <div className="nav-inner">
        <Link to="/" className="site-brand">Todo</Link>
        <ul className="nav-links">
          <li><Link to="/">Tasks</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/about">About</Link></li>
          </ul>
      </div>
    </nav>
  );
    
    
}

export default Navbar 