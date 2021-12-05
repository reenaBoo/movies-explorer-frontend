import React from 'react';
import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';
import accountIcon from '../../images/account-icon.svg';

function Navigation() {
  const activeLink = (isActive) => (isActive ? 'header__nav-link_active' : '');

  return (
    <>
      <nav className="bbb">
        <NavLink className={`header__nav-link ${activeLink}`} to="/movies">
          Фильмы
        </NavLink>
        <NavLink className={`header__nav-link ${activeLink}`} to="/saved-movies">
          Сохранённые фильмы
        </NavLink>
      </nav>
      <Link className="header__account-link" to="/profile">
        <img src={accountIcon} alt="Иконка профиля" className="header__account-icon" />
        Аккаунт
      </Link>
    </>
  );
}

export default Navigation;
