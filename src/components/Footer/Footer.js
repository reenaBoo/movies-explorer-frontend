import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__block">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__container">
          <p className="footer__copyright">&#169; {new Date().getFullYear()}</p>
          <nav className="footer__nav">
            <ul className="footer__list">
              <li className="footer__item">
                <a
                  href="https://practicum.yandex.ru/"
                  target="_blank"
                  rel="noreferrer"
                  className="footer__link"
                >
                  Яндекс.Практикум
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="https://github.com/Yandex-Practicum"
                  target="_blank"
                  rel="noreferrer"
                  className="footer__link"
                >
                  Github
                </a>
              </li>
              <li className="footer__item">
                <a
                  href="https://www.facebook.com/yandex.practicum/"
                  target="_blank"
                  rel="noreferrer"
                  className="footer__link"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
