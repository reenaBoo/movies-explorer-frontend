import React from 'react';
import {useHistory} from "react-router-dom";
import './PageNotFound.css';

function PageNotFound() {
    const history = useHistory();

    return (
    <section className="error">
      <h2 className="error__title">404</h2>
      <p className="error__text">Страница не найдена</p>
      <button className="error__button" onClick={() => history.goBack()}>Назад</button>
    </section>
  );
}

export default PageNotFound;
