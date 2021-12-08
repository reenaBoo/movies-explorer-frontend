import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Logo.css';

function Logo() {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== '/signup' && <Link className="header__logo" to="/" />}
      {pathname === '/signup' && <Link className="header__logo-sign" to="/" />}
    </>
  );
}

export default Logo;
