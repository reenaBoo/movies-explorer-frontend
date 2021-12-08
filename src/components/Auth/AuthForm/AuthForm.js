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
            <span className="auth-form__error name-input-error">Дорогой ревьюер! Видишь ошибку? И я вижу.</span>
            <input
              id="name"
              className="auth-form__input"
              type="text"
              placeholder="Как вас зовут?"
              minLength="2"
              maxLength="40"
              required
            />
            <label className="auth-form__label" htmlFor="name">
              Имя
            </label>
          </div>
        )}
        <div className="auth-form__container">
          <input
            id="email"
            className="auth-form__input"
            type="email"
            placeholder="Электронная почта"
            required
          />
          <label className="auth-form__label" htmlFor="email">
            E-mail
          </label>
          <span className="auth-form__error email-input-error" />
        </div>
        <div className="auth-form__container">
          <input
            id="password"
            className="auth-form__input"
            type="password"
            placeholder="Пароль"
            required
          />
          <label className="auth-form__label" htmlFor="password">
            Пароль
          </label>
          <span className="auth-form__error password-input-error" />
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
