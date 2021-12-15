import React, { useState } from 'react';
import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';
import accountIcon from '../../images/account-icon.svg';

function Navigation() {
  const activeLink = (isActive) => (isActive ? 'navigation__link_active' : '');

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function handleClickOpenMenu() {
    setIsOpenMenu(true);
  }

  function handleClickCloseMenu(evt) {
    if (
      evt.target === evt.currentTarget ||
      evt.target.classList.contains('navigation__icon-close')
    ) {
      setIsOpenMenu(false);
    }
  }

  return (
    <>
      <nav className="navigation">
        <div
          className={`navigation__overlay${isOpenMenu ? ' navigation__overlay_display_flex' : ''}`}
          onClick={handleClickCloseMenu}
        >
          <div className="navigation__container">
            <button className="navigation__icon-close" />
            <div className="navigation__links-container">
              <NavLink className={`navigation__link ${activeLink}`} to="/">
                Главная
              </NavLink>
              <NavLink className={`navigation__link ${activeLink}`} to="/movies">
                Фильмы
              </NavLink>
              <NavLink className={`navigation__link ${activeLink}`} to="/saved-movies">
                Сохранённые фильмы
              </NavLink>
            </div>

            <Link className="navigation__account-link" to="/profile">
              <img src={accountIcon} alt="Иконка профиля" className="navigation__account-icon" />
              Аккаунт
            </Link>
          </div>
        </div>
        <button className="navigation__icon-burger" onClick={handleClickOpenMenu} />
      </nav>
    </>
  );
}

export default Navigation;
