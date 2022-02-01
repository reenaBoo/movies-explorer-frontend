import './MovieCardButton.css';

function MovieCardButton({ handleDeleteFilm, handleSaveFilm, card, isLike, saveCards, setIsLike }) {
  const pathName = window.location.pathname;

  return (
    <>
      {pathName === '/saved-movies' ? (
        <button
          className="movie-card__button-delete"
          onClick={() => {
            handleDeleteFilm(card);
          }}
        />
      ) : (
        <button
          className={`${isLike ? 'movie-card__button_saved' : 'movie-card__button_save'}`}
          onClick={() => {
            if (isLike) {
              handleDeleteFilm(saveCards.find((saveCard) => saveCard.movieId === card.id));
            } else {
              handleSaveFilm(card);
            }
            setIsLike(!isLike);
          }}
        >
          {isLike ? '' : 'Сохранить'}
        </button>
      )}
    </>
  );
}

export default MovieCardButton;
