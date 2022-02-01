import React, { useState, useEffect } from 'react';
import MovieCardButton from '../MovieCardButton/MovieCardButton';
import './MoviesCard.css';

function MoviesCard({ card, handleSaveFilm, handleDeleteFilm, saveCards }) {
  const duration = prepareDuration(card.duration);
  const pathName = window.location.pathname;
  const imgUrl =
    pathName === '/movies' ? 'https://api.nomoreparties.co' + card.image.url : card.image;

  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    saveCards.map((saveCard) => {
      if (saveCard.movieId === card.id) {
        setIsLike(true);
      }
    });
  }, [saveCards, card]);

  // function setAllCards
  function prepareDuration(minutes) {
    if (minutes > 60) {
      return ((minutes / 60) | 0) + 'ч ' + (minutes % 60) + 'м';
    } else if (minutes === 60) {
      return ((minutes / 60) | 0) + 'ч ';
    } else {
      return minutes + ' мин';
    }
  }

  return (
    <div className="movie-card">
      <div className="movie-card__container">
        <h3 className="movie-card__title">{card.nameRU}</h3>
        <p className="movie-card__description">{duration}</p>
      </div>
      <a href={card.trailerLink || card.trailer} target="_blank" rel="noreferrer">
        <img className="movie-card__poster" src={imgUrl} alt={card.nameRU} />
      </a>
      <MovieCardButton
        handleDeleteFilm={handleDeleteFilm}
        handleSaveFilm={handleSaveFilm}
        card={card}
        isLike={isLike}
        saveCards={saveCards}
        setIsLike={setIsLike}
      />
    </div>
  );
}

export default MoviesCard;
