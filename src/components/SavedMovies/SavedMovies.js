import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies({
  filterSavedCards,
  tumbler,
  setTumbler,
  handleFilter,
  setSavedMoviesInputValue,
  amountShowCards,
  setAmountShowCards,
  addShowCards,
  handleDeleteFilm,
  handleSaveFilm,
  saveCards,
  loggedIn,
  isPreloader,
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
          setSearchValue={setSavedMoviesInputValue}
          tumbler={tumbler}
          setTumbler={setTumbler}
          arrayForSearch={saveCards}
          searchValue={searchValue}
        />

        {error ? (
          <p className="error-text">{errorText}</p>
        ) : (
          <MoviesCardList
            isPreloader={isPreloader}
            tumbler={tumbler}
            filterCards={filterSavedCards}
            saveCards={saveCards}
            handleSaveFilm={handleSaveFilm}
            handleDeleteFilm={handleDeleteFilm}
            amountShowCards={amountShowCards}
            setAmountShowCards={setAmountShowCards}
            addShowCards={addShowCards}
            errorText={errorText}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
