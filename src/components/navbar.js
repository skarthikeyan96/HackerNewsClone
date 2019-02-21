import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

function Navbar(props) {
    return (
    <div className="navbar-fixed">
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a href="/" className="brand-logo center">Hacker News</a>
        <ul className="right hide-on-med-and-down">
          <li><a href="/"> Home </a> </li>
          <li><a href="/News"> News </a> </li>
        </ul>
      </div>
    </nav>
    </div> )
  
}


export default Navbar;
