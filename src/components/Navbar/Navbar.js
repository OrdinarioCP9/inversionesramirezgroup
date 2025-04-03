import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>InversionesGrupo</h1>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#inicio" className="nav-link">Inicio</a>
          </li>
          <li className="nav-item">
            <a href="#ventajas" className="nav-link">Ventajas</a>
          </li>
          <li className="nav-item">
            <a href="#experiencias" className="nav-link">Experiencias</a>
          </li>
          <li className="nav-item">
            <a href="#contacto" className="nav-link">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
