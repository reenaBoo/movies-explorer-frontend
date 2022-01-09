import React from 'react';
import './SearchForm.css';

function SearchForm({
  handleFilter,
  setSearchValue,
  tumbler,
  setTumbler,
  arrayForSearch,
  searchValue,
}) {
  function handleEdit(evt) {
    setSearchValue(evt.target.value);
  }

  function changeTumbler() {
    setTumbler(tumbler ? false : true);
  }

  return (
    <section className="search">
      <form
        className="search-form"
        method="GET"
        onSubmit={(evt) => {
          evt.preventDefault();
          handleFilter(arrayForSearch);
        }}
        noValidate
      >
        <input
          className="search-form__input"
          name="search-input"
          placeholder="Фильм"
          type="search"
          minLength={2}
          value={searchValue}
          required
          onChange={handleEdit}
        />
        <button className="search-form__submit-button" type="submit" />
      </form>
      <div className="search-form__container">
        <div className="search-form__switch">
          <input
            type="checkbox"
            id="switch"
            className="search-form__switch-input"
            checked={tumbler}
            onChange={changeTumbler}
          />
          <label htmlFor="switch" className="search-form__switch-button" />
          <label htmlFor="switch" className="search-form__switch-circle" />
        </div>
        <p className="search-form__text">Короткометражки</p>
      </div>
    </section>
  );
}

export default SearchForm;
