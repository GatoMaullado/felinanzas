// Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-floating">
      <ul className="navbar-links">
        <li><a href="https://www.youtube.com/@GatoMaullado" target="_blank" rel="noopener noreferrer">Inicio</a></li>
        <li><a href="https://www.youtube.com/@GatoMaullado" target="_blank" rel="noopener noreferrer">Servicios</a></li>
        <li><a href="https://www.youtube.com/@GatoMaullado" target="_blank" rel="noopener noreferrer">Consejos Felinos</a></li>
        <li><a href="https://www.youtube.com/@GatoMaullado" target="_blank" rel="noopener noreferrer">Contacto</a></li>
        <li><a href="https://www.youtube.com/@GatoMaullado" target="_blank" rel="noopener noreferrer">Registro</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
