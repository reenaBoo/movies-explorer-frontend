import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <p className="footer__copyright">&#169; {new Date().getFullYear()}</p>
        <nav className="footer__nav">
          <ul className="footer__list">
            <li className="footer__item">Яндекс.Практикум</li>
            <li className="footer__item">Github</li>
            <li className="footer__item">Facebook</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
