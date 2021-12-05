import React from 'react';
import './AboutProject.css';
import Title from "../Title/Title";

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <Title titleText={'О проекте'}/>
      <div className="about-project__description">
        <div className="about-project__container">
          <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные
            доработки.
          </p>
        </div>
        <div className="about-project__container">
          <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы
            успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__duration">
        <div className="about-project__duration-container">
          <div className="about-project__first-week">1 неделя</div>
          <p className="about-project__duration-text">Back-end</p>
        </div>
        <div className="about-project__duration-container">
          <div className="about-project__fourth-weeks">4 недели</div>
          <p className="about-project__duration-text">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
