import React, { useState, useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';
import ButtonMore from '../ButtonMore/ButtonMore';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({
  tumbler,
  filterCards,
  saveCards,
  handleSaveFilm,
  handleDeleteFilm,
  amountShowCards,
  setAmountShowCards,
  addShowCards,
  isPreloader,
}) {
  const [moreButton, setMoreButton] = useState(true);

  useEffect(() => {
    if (filterCards.length <= amountShowCards) {
      setMoreButton(false);
    } else {
      setMoreButton(true);
    }
  }, [filterCards, amountShowCards]);

  // Фильтрация по состоянию тумблера
  let tumblerFilteredArray = filterCards.filter((card) => {
    if (!tumbler || (tumbler && card.duration <= 40)) {
      return card;
    }
  });

  return (
    <>
      {isPreloader ? (
        <Preloader />
      ) : (
        <>
          <section className="movies-list">
            <div className="movies-list__container">
              {tumblerFilteredArray.slice(0, amountShowCards).map((card) => {
                return (
                  <MoviesCard
                    key={card.id}
                    card={card}
                    handleSaveFilm={handleSaveFilm}
                    handleDeleteFilm={handleDeleteFilm}
                    saveCards={saveCards}
                  />
                );
              })}
            </div>
          </section>
          {moreButton && (
            <ButtonMore
              setAmountShowCards={setAmountShowCards}
              amountShowCards={amountShowCards}
              addShowCards={addShowCards}
            />
          )}
        </>
      )}
    </>
  );
}

export default MoviesCardList;
