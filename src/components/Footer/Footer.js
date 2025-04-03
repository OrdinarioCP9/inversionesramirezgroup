import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>InversionesGrupo</h3>
          <p>Somos especialistas en inversiones seguras y rentables.</p>
        </div>
        
        <div className="footer-section">
          <h3>Enlaces rápidos</h3>
          <ul className="footer-links">
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#ventajas">Ventajas</a></li>
            <li><a href="#experiencias">Experiencias</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Email: info@inversionesgrupo.com</p>
          <p>Teléfono: (123) 456-7890</p>
          <p>Dirección: Calle Inversión 123, Ciudad</p>
        </div>
        
        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-links">
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Instagram</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2023 InversionesGrupo. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
