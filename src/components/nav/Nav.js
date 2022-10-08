import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import '../../styles/Nav.css';

function Nav() {
  return (
    <nav className="Nav">
      <Link to="/">
        <img src={logo} className="Nav-logo" alt="Stussy logo" />
      </Link>
      <Link to="/shop" className="Nav-link">Shop</Link>
    </nav>
  );
}

export default Nav;
