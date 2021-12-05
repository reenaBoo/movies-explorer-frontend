import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './AuthForm.css';

function AuthForm({ buttonText, textDescription, textLink }) {
  const { pathname } = useLocation();

  return (
    <>
      <form className="auth-form">
        {pathname === '/signup' && (
          <div className="auth-form__container">
            <input
              id="input-name"
              className="auth-form__input"
              type="text"
              placeholder="Как вас зовут?"
              minLength="2"
              maxLength="40"
              required
            />
            <label className="auth-form__label" htmlFor="input-name">
              Имя
            </label>
          </div>
        )}
        <div className="auth-form__container">
          <input
            id="input-email"
            className="auth-form__input"
            type="email"
            placeholder="Электронная почта"
            required
          />
          <label className="auth-form__label" htmlFor="input-email">
            E-mail
          </label>
        </div>
        <div className="auth-form__container">
          <input
            id="input-password"
            className="auth-form__input"
            type="password"
            placeholder="Пароль"
            required
          />
          <label className="auth-form__label" htmlFor="input-password">
            Пароль
          </label>
        </div>
      </form>
      <div className="auth-form__button-container">
        <button className="auth-form__button-submit" type="submit">
          {buttonText}
        </button>
        <div className="auth-form__sign-container">
          <p className="auth-form__caption">{textDescription}</p>
          <Link to="/signin" className="auth-form__link">
            {textLink}
          </Link>
        </div>
      </div>
    </>
  );
}

export default AuthForm;
