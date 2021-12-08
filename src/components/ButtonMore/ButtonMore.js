import React from 'react';
import './ButtonMore.css';
import { useLocation } from 'react-router-dom';

function ButtonMore() {
  const { pathname } = useLocation();
  return (
    <section className="button-more">
      {pathname === './movies' && (
        <button className="button-more__button" type="button">
          Ещё
        </button>
      )}
    </section>
  );
}

export default ButtonMore;
