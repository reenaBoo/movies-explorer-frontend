import React, { useEffect } from 'react';
import './Login.css';
import Logo from '../../Logo/Logo';
import AuthTitle from '../AuthTitle/AuthTitle';
import AuthForm from '../AuthForm/AuthForm';
import { useFormWithValidation } from '../../../utils/useFormWithValidation';
import { useNavigate } from 'react-router-dom';

function Login({ onSubmit, loggedIn }) {
  const { values, errors, isValid, handleChange } = useFormWithValidation();
  const navigate = useNavigate();

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(values);
  }

  useEffect(() => {
    if (loggedIn) navigate('/profile');
  }, [loggedIn]);

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
      />
    </section>
  );
}

export default Login;
