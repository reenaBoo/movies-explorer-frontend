import React, { useState } from 'react';
import './SearchForm.css';

function SearchForm({ search, onCheckboxClick }) {
  const [inputValue, setInputValue] = useState('');

  function handleChangeQuery(evt) {
    setInputValue(evt.target.value);
  }

  function handleSubmitSearch(evt) {
    evt.preventDefault();
    search(inputValue);
  }

  return (
    <section className="search">
      <form className="search-form" method="GET" onSubmit={handleSubmitSearch}>
        <input
          className="search-form__input"
          name="search-input"
          placeholder="Фильм"
          type="search"
          required
          minLength={2}
          onChange={handleChangeQuery}
        />
        <button className="search-form__submit-button" type="submit" />
      </form>
      <div className="search-form__container">
        <div className="search-form__switch">
          <input type="checkbox" id="switch" className="search-form__switch-input" onChange={onCheckboxClick} />
          <label htmlFor="switch" className="search-form__switch-button" />
          <label htmlFor="switch" className="search-form__switch-circle" />
        </div>
        <p className="search-form__text">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
