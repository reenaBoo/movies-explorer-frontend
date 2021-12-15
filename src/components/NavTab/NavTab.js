import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './NavTab.css';

function NavTab() {
  return (
    <nav className="navtab">
      <ul className="navtab__list">
        <li className="navtab__item">
          <HashLink className="navtab__link" to="/#about-project">О проекте</HashLink>
        </li>
        <li className="navtab__item">
          <HashLink className="navtab__link" to="/#techs">Технологии</HashLink>
        </li>
        <li className="navtab__item">
          <HashLink className="navtab__link" to="/#about-me">Студент</HashLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
