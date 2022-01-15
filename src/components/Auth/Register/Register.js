import React from 'react';
import AuthTitle from '../AuthTitle/AuthTitle';
import Logo from '../../Logo/Logo';
import './Register.css';
import AuthForm from '../AuthForm/AuthForm';
import { mainApi } from '../../../utils/MainApi';
import { useFormWithValidation } from '../../../utils/useFormWithValidation';

function Register({ onSubmit }) {
  const { values, errors, isValid, handleChange, validateEmail } = useFormWithValidation();

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
        validateEmail={validateEmail}
      />
    </section>
  );
}

export default Register;
