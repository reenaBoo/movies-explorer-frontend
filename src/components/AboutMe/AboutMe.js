import React from 'react';
import './AboutMe.css';
import Title from '../Title/Title';
import photo from '../../images/photo.png';

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <Title titleText={'Студент'} />
      <div className="about-me__container">
        <div className="about-me__info">
          <h3 className="about-me__subtitle">Виталий</h3>
          <h4 className="about-me__description">Фронтенд-разработчик, 30 лет</h4>
          <p className="about-me__text">
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь.
            Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал
            в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься
            фриланс-заказами и ушёл с постоянной работы.
          </p>
          <div className="about-me__links">
            <a className="about-me__link" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a className="about-me__link" href="https://github.com/" target="_blank" rel="noreferrer">
              Github
            </a>
          </div>
        </div>
        <img className="about-me__photo" src={photo} alt="Фотография" />
      </div>
    </section>
  );
}

export default AboutMe;
