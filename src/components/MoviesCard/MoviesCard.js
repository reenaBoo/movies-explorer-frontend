import React from 'react';
import moviePoster from '../../images/movie-poster.png';
import MovieCardButton from '../MovieCardButton/MovieCardButton';
import './MoviesCard.css';

function MoviesCard() {
  return (
    <div className="movie-card">
      <div className="movie-card__container">
        <h3 className="movie-card__title">В погоне за Бенкси</h3>
        <p className="movie-card__description">27 минут</p>
      </div>
      <img className="movie-card__poster" src={moviePoster} alt="Постер фильма" />
      <MovieCardButton />
    </div>
  );
}

export default MoviesCard;
