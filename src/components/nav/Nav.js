import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Nav.css';

function Nav() {
  return (
    <nav className="Nav">
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
    </nav>
  );
}

export default Nav;
