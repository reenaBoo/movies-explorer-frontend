import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies({
  tumbler,
  setTumbler,
  filterCards,
  handleFilter,
  setMoviesInputValue,
  amountShowCards,
  setAmountShowCards,
  addShowCards,
  handleDeleteFilm,
  handleSaveFilm,
  saveCards,
  loggedIn,
  isPreloader,
  cards,
  searchValue,
  errorText,
  error,
}) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main className="movies">
        <SearchForm
          handleFilter={handleFilter}
          setSearchValue={setMoviesInputValue}
          tumbler={tumbler}
          setTumbler={setTumbler}
          arrayForSearch={cards}
          searchValue={searchValue}
        />
        {error ? (
          <p className="error-text">{errorText}</p>
        ) : (
          <MoviesCardList
            tumbler={tumbler}
            filterCards={filterCards}
            saveCards={saveCards}
            handleSaveFilm={handleSaveFilm}
            handleDeleteFilm={handleDeleteFilm}
            amountShowCards={amountShowCards}
            setAmountShowCards={setAmountShowCards}
            addShowCards={addShowCards}
            isPreloader={isPreloader}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
