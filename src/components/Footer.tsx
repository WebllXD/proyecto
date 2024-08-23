import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="copyright">
          Copyright 2023 Mi Aplicación. Todos los derechos reservados.
        </p>
        <ul className="links">
          <li>
            <Link to="/terms">
              Términos y condiciones
            </Link>
          </li>
          <li>
            <Link to="/privacy">
              Política de privacidad
            </Link>
          </li>
          <li>
            <Link to="/contact">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
