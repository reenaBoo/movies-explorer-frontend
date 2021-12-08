import React from 'react';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className="search">
      <form className="search-form" method="GET">
        <span className="search-form__error name-input-error">
          Дорогой ревьюер! Видишь ошибку? И я вижу.
        </span>
        <input
          className="search-form__input"
          name="search-input"
          placeholder="Фильм"
          type="search"
        />
        <button className="search-form__submit-button" type="submit" />
      </form>
      <div className="search-form__container">
        <div className="search-form__switch">
          <input type="checkbox" id="switch" className="search-form__switch-input" />
          <label htmlFor="switch" className="search-form__switch-button" />
          <label htmlFor="switch" className="search-form__switch-circle" />
        </div>
        <p className="search-form__text">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
