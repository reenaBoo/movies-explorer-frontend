import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <a className="portfolio__link" href="https://github.com/" target="_blank" rel="noreferrer">
        Статичный сайт
      </a>
      <a className="portfolio__link" href="https://github.com/" target="_blank" rel="noreferrer">
        Адаптивный сайт
      </a>
      <a className="portfolio__link" href="https://github.com/" target="_blank" rel="noreferrer">
        Одностраничное приложение
      </a>
    </section>
  );
}

export default Portfolio;
