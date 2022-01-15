import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthTitle from '../AuthTitle/AuthTitle';
import './Profile.css';
import Header from '../../Header/Header';
import { mainApi } from '../../../utils/MainApi';
import { CurrentUserContext } from '../../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../../utils/useFormWithValidation';

function Profile({
  loggedIn,
  setLoggedIn,
  setFilterSavedCards,
  setSaveCards,
  setCards,
  setFilterCards,
}) {
  const navigate = useNavigate();
  const { values, setValues, errors, handleChange, validateEmail } = useFormWithValidation();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [isDisabled, setIsDisabled] = useState(true);

  function handleSubmitEditProfile(evt) {
    evt.preventDefault();
    mainApi
      .editUserInfo(values)
      .then((res) => {
        setCurrentUser(res.data);
      })
      .catch((err) => {
        console.log('Ошибка ' + err);
      });
  }

  function handleSignOut() {
    mainApi
      .signOut()
      .then(() => {
        setLoggedIn(false);
        navigate('/');
        localStorage.removeItem('filterCards');
        localStorage.removeItem('filterSavedCards');
        localStorage.removeItem('moviesInputValue');
        localStorage.removeItem('savedMoviesInputValue');
        localStorage.removeItem('moviesTumbler');
        localStorage.removeItem('savedMoviesTumbler');
        setCards([]);
        setSaveCards([]);
        setFilterSavedCards([]);
        setFilterCards([]);
        setCurrentUser({});
      })
      .catch((err) => {
        console.log('Ошибка ' + err);
      });
  }

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [currentUser]);

  useEffect(() => {
    if (currentUser.name !== values.name || currentUser.email !== values.email) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [values]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className="profile">
        <AuthTitle classStyle={'profile'} titleText={`Привет, ${currentUser.name}!`} />
        <form className="profile__form" onSubmit={handleSubmitEditProfile} noValidate>
          <div className="profile__string">
            <input
              id="name"
              name="name"
              className="profile-form__input"
              type="text"
              placeholder="Как вас зовут?"
              minLength={2}
              maxLength={40}
              value={values.name}
              onChange={handleChange}
              required
            />
            <label className="profile-form__label" htmlFor="input-name">
              Имя
            </label>
          </div>
          <div className="profile__string">
            <input
              id="email"
              name="email"
              className="profile-form__input"
              type="email"
              placeholder="Введите адрес электронной почты"
              value={values.email}
              onChange={handleChange}
              required
            />
            <label className="profile-form__label" htmlFor="input-email">
              E-mail
            </label>
          </div>
          <span className="profile-form__error">{errors.name}</span>
          <span className="profile-form__error">
            {validateEmail(values.email) && 'Email не валиден'}
          </span>
          <button
            type="submit"
            className="profile__button-edit"
            disabled={isDisabled || validateEmail(values.email)}
          >
            Редактировать
          </button>
        </form>
        <button type="button" className="profile__button-exit" onClick={handleSignOut}>
          Выйти из аккаунта
        </button>
      </section>
    </>
  );
}

export default Profile;
