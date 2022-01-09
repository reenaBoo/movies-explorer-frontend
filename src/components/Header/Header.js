import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import './Header.css';

function Header({ loggedIn }) {
  const { pathname } = useLocation();
  return (
    <header className={`header ${pathname === '/' ? 'header__blue-theme' : ''}`}>
      <div className="header__container">
        <Logo />
        {loggedIn ? (
          <Navigation />
        ) : (
          <nav className="header__auth">
            <ul className="header__list">
              <li>
                <Link className="header__link" to="signup">
                  Регистрация
                </Link>
              </li>
              <li>
                <Link className="header__link-button" to="signin">
                  Войти
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
