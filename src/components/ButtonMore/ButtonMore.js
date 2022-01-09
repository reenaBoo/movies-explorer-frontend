import React from 'react';
import './ButtonMore.css';

function ButtonMore({ setAmountShowCards, amountShowCards, addShowCards }) {
  function handleShowMore() {
    setAmountShowCards(amountShowCards + addShowCards);
  }

  return (
    <section className="button-more">
      <button className="button-more__button" type="button" onClick={handleShowMore}>
        Ещё
      </button>
    </section>
  );
}

export default ButtonMore;
