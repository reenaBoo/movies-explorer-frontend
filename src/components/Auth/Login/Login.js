import React from 'react';
import './Login.css';
import Logo from '../../Logo/Logo';
import AuthTitle from '../AuthTitle/AuthTitle';
import AuthForm from '../AuthForm/AuthForm';
import { useFormWithValidation } from '../../../utils/useFormWithValidation';

function Login({ onSubmit }) {
  const { values, errors, isValid, handleChange, validateEmail, errorText } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(values);
  }

  return (
    <section className="login">
      <Logo />
      <AuthTitle classStyle={'sign'} titleText="Рады видеть!" />
      <AuthForm
        buttonText={'Войти'}
        textDescription={'Ещё не зарегистрированы?'}
        textLink={'Регистрация'}
        onSubmit={handleSubmit}
        onChange={handleChange}
        isValid={isValid}
        values={values}
        errors={errors}
        validateEmail={validateEmail}
        errorText={errorText}
      />
    </section>
  );
}

export default Login;
