import React from 'react';
import './Login.css';
import Logo from "../../Logo/Logo";
import AuthTitle from "../AuthTitle/AuthTitle";
import AuthForm from "../AuthForm/AuthForm";

function Login() {
  return (
    <section className="login">
      <Logo />
      <AuthTitle classStyle={'sign'} titleText="Рады видеть!" />
      <AuthForm
        buttonText={'Войти'}
        textDescription={'Ещё не зарегистрированы?'}
        textLink={'Регистрация'}
      />

    </section>
  );
}

export default Login;
