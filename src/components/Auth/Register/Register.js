import React, { useEffect } from 'react';
import AuthTitle from '../AuthTitle/AuthTitle';
import Logo from '../../Logo/Logo';
import './Register.css';
import AuthForm from '../AuthForm/AuthForm';
import { mainApi } from '../../../utils/MainApi';
import { useFormWithValidation } from '../../../utils/useFormWithValidation';
import { useNavigate } from 'react-router-dom';

function Register({ onSubmit, loggedIn }) {
  const { values, errors, isValid, handleChange } = useFormWithValidation();
  const navigate = useNavigate();

  function handleSubmit(evt) {
    evt.preventDefault();
    mainApi
      .register(values)
      .then(() => {
        onSubmit(values);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    if (loggedIn) navigate('/profile');
  }, [loggedIn]);

  return (
    <section className="register">
      <Logo />
      <AuthTitle classStyle={'sign'} titleText="Добро пожаловать!" />
      <AuthForm
        buttonText={'Зарегистрироваться'}
        textDescription={'Уже зарегистрированы?'}
        textLink={'Войти'}
        onSubmit={handleSubmit}
        onChange={handleChange}
        isValid={isValid}
        values={values}
        errors={errors}
      />
    </section>
  );
}

export default Register;
