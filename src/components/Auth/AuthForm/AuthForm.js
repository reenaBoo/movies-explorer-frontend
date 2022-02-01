import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './AuthForm.css';

function AuthForm({
  buttonText,
  textDescription,
  textLink,
  onSubmit,
  onChange,
  values,
  errors,
  isValid,
  validateEmail,
  errorText,
}) {
  const { pathname } = useLocation();
  return (
    <>
      <form className="auth-form" onSubmit={onSubmit} noValidate>
        {pathname === '/signup' && (
          <div className="auth-form__container">
            <span className="auth-form__error name-input-error">{errors.name}</span>
            <input
              id="name"
              name="name"
              className="auth-form__input"
              type="text"
              placeholder="Как вас зовут?"
              minLength={2}
              maxLength={40}
              required
              onChange={onChange}
              value={values.name || ''}
            />
            <label className="auth-form__label" htmlFor="name">
              Имя
            </label>
          </div>
        )}
        <div className="auth-form__container">
          <span className="auth-form__error email-input-error">
            {values.email ? validateEmail(values.email) && 'Email не валиден' : ''}
          </span>
          <input
            id="email"
            name="email"
            className="auth-form__input"
            type="email"
            placeholder="Электронная почта"
            required
            onChange={onChange}
            value={values.email || ''}
          />
          <label className="auth-form__label" htmlFor="email">
            E-mail
          </label>
        </div>
        <div className="auth-form__container">
          <span className="auth-form__error password-input-error">{errors.password}</span>
          <input
            id="password"
            name="password"
            className="auth-form__input"
            type="password"
            placeholder="Пароль"
            minLength="8"
            required
            onChange={onChange}
            value={values.password || ''}
          />
          <label className="auth-form__label" htmlFor="password">
            Пароль
          </label>
        </div>
        <span className="auth-form__error">{errorText}</span>
        <button
          className="auth-form__button-submit"
          type="submit"
          disabled={!isValid || validateEmail(values.email)}
        >
          {buttonText}
        </button>
      </form>
      <div className="auth-form__button-container">
        <div className="auth-form__sign-container">
          <p className="auth-form__caption">{textDescription}</p>
          {pathname === '/signup' && (
            <Link to="/signin" className="auth-form__link">
              {textLink}
            </Link>
          )}
          {pathname === '/signin' && (
            <Link to="/signup" className="auth-form__link">
              {textLink}
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default AuthForm;
