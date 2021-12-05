import React from 'react';
import AuthTitle from '../AuthTitle/AuthTitle';
import Logo from '../../Logo/Logo';
import './Register.css';
import AuthForm from '../AuthForm/AuthForm';

function Register() {
  return (
    <section className="register">
      <Logo />
      <AuthTitle classStyle={'sign'} titleText="Добро пожаловать!" />
      <AuthForm
        buttonText={'Зарегистрироваться'}
        textDescription={'Уже зарегистрированы?'}
        textLink={'Войти'}
      />
    </section>
  );
}

export default Register;
