import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Logo from '../Logo/Logo';
import './Header.css';

function Header() {
  const { pathname } = useLocation();
  return (
    <header className={`header ${pathname === '/' ? 'header__blue-theme' : ''}`}>
      <div className="header__container">
        <Logo />
        {pathname === '/' && (
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
        {pathname === '/movies' && <Navigation />}
        {pathname === '/saved-movies' && <Navigation />}
        {pathname === '/profile' && <Navigation />}
      </div>
    </header>
  );
}

export default Header;
