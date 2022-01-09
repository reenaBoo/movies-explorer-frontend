import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Footer from '../Footer/Footer';
import Profile from '../Auth/Profile/Profile';
import Register from '../Auth/Register/Register';
import Login from '../Auth/Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';

function App() {
  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({});

  const [cards, setCards] = useState([]);
  const [saveCards, setSaveCards] = useState([]);
  const [filterCards, setFilterCards] = useState([]);
  const [filterSavedCards, setFilterSavedCards] = useState([]);
  const [preloader, setPreloader] = useState(false);
  const [amountShowCards, setAmountShowCards] = useState(
    window.innerWidth > 1279 ? 12 : window.innerWidth > 767 ? 8 : 5,
  );
  const [addShowCards, setAddShowCards] = useState(window.innerWidth > 1279 ? 3 : 2);
  const [moviesInputValue, setMoviesInputValue] = useState('');
  const [savedMoviesInputValue, setSavedMoviesInputValue] = useState('');
  const [moviesTumbler, setMoviesTumbler] = useState(false);
  const [savedMoviesTumbler, setSavedMoviesTumbler] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [error, setError] = useState(false);

  const userData = { currentUser, setCurrentUser };

  function handleSignIn(data) {
    mainApi
      .login(data)
      .then(() => {
        setLoggedIn(true);
        navigate('/movies');
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  useEffect(() => {
    const localFilterCards = JSON.parse(localStorage.getItem('filterCards'))
    if (localFilterCards) setFilterCards(localFilterCards);
    const localFilterSaveCards = JSON.parse(localStorage.getItem('filterSavedCards'))
    if (localFilterSaveCards) setFilterSavedCards(localFilterSaveCards);
    setMoviesTumbler(JSON.parse(localStorage.getItem('moviesTumbler')));
    setSavedMoviesTumbler(JSON.parse(localStorage.getItem('savedMoviesTumbler')));
    setMoviesInputValue(JSON.parse(localStorage.getItem('moviesInputValue')));
    setSavedMoviesInputValue(JSON.parse(localStorage.getItem('savedMoviesInputValue')));
  }, []);

  useEffect(() => {
    Promise.all([mainApi.getUserInfo(), mainApi.getSavedMovies()])
      .then(([user, userCards]) => {
        setLoggedIn(true);
        setCurrentUser(user.data);

        const currUserMovies = userCards.data.filter((currentUserCard) => {
          if (user.data._id === currentUserCard.owner) {
            return currentUserCard;
          }
        });
        setSaveCards(currUserMovies);
      })
      .catch((err) => {
        setLoggedIn(false);
        setCurrentUser({});
        console.log('Ошибка ' + err);
        setErrorText(
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. ' +
            'Подождите немного и попробуйте ещё раз',
        );
      });
  }, []);

  useEffect(() => {
    moviesApi
      .getMovies()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
        setErrorText(
          'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. ' +
            'Подождите немного и попробуйте ещё раз',
        );
      });
  }, []);

  // Функция добавления в избранные
  function handleSaveFilm(card) {
    setPreloader(true);
    mainApi
      .saveMovie(card)
      .then((res) => {
        setSaveCards([...saveCards, res.data]);
      })
      .catch((err) => {
        console.log(err);
        setErrorText(
          'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. ' +
            'Подождите немного и попробуйте ещё раз',
        );
      })
      .finally(() => {
        setPreloader(false);
      });
  }

  // Функция удаления из избранного
  function handleDeleteFilm(card) {
    setPreloader(true);
    mainApi
      .deleteMovie(card)
      .then(() => {
        setSaveCards(saveCards.filter((m) => m._id !== card._id));
        setFilterSavedCards(saveCards.filter((m) => m._id !== card._id));
        localStorage.setItem(
          'filterSavedCards',
          JSON.stringify(saveCards.filter((m) => m._id !== card._id)),
        );
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setPreloader(false);
      });
  }

  // Функция фильтрации карточек в Movies по ключевому слову
  function handleMoviesFilter(arrayForSearch) {
    // eslint-disable-next-line array-callback-return
    const newArray = arrayForSearch.filter((card) => {
      if (card.nameRU.toLowerCase().includes(moviesInputValue)) {
        return card;
      }
    });
    if (newArray.length === 0) {
      setError(true);
      setErrorText('Ничего не найдено');
    } else if (moviesInputValue.length === 0) {
      setError(true);
      setErrorText('Нужно ввести ключевое слово');
    } else {
      setError(false);
    }

    localStorage.setItem('filterCards', JSON.stringify(newArray));
    setFilterCards(JSON.parse(localStorage.getItem('filterCards')));
    localStorage.setItem('moviesInputValue', JSON.stringify(moviesInputValue));
    localStorage.setItem('moviesTumbler', JSON.stringify(moviesTumbler));
  }

  // Функция фильтрации карточек в SavedMovies по ключевому слову
  function handleSavedMoviesFilter(arrayForSearch) {
    const newArray = arrayForSearch.filter((card) => {
      if (card.nameRU.toLowerCase().includes(savedMoviesInputValue)) {
        return card;
      }
    });
    if (newArray.length === 0) {
      setError(true);
      setErrorText('Ничего не найдено');
    } else if (savedMoviesInputValue.length === 0) {
      setError(true);
      setErrorText('Нужно ввести ключевое слово');
    } else {
      setError(false);
    }

    localStorage.setItem('filterSavedCards', JSON.stringify(newArray));
    setFilterSavedCards(JSON.parse(localStorage.getItem('filterSavedCards')));
    localStorage.setItem('savedMoviesInputValue', JSON.stringify(savedMoviesInputValue));
    localStorage.setItem('savedMoviesTumbler', JSON.stringify(savedMoviesTumbler));
  }

  // Автоматическое определение размера экрана
  window.onresize = () => {
    if (window.innerWidth > 1279) {
      setAddShowCards(3);
    } else {
      setAddShowCards(2);
    }
  };

  return (
    <>
      <CurrentUserContext.Provider value={userData}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header loggedIn={loggedIn} />
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute
                component={Movies}
                loggedIn={loggedIn}
                tumbler={moviesTumbler}
                setTumbler={setMoviesTumbler}
                filterCards={filterCards}
                handleFilter={handleMoviesFilter}
                setMoviesInputValue={setMoviesInputValue}
                amountShowCards={amountShowCards}
                setAmountShowCards={setAmountShowCards}
                addShowCards={addShowCards}
                handleDeleteFilm={handleDeleteFilm}
                handleSaveFilm={handleSaveFilm}
                saveCards={saveCards}
                isPreloader={preloader}
                cards={cards}
                searchValue={moviesInputValue}
                errorText={errorText}
                error={error}
              />
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute
                component={SavedMovies}
                loggedIn={loggedIn}
                filterSavedCards={filterSavedCards}
                tumbler={savedMoviesTumbler}
                setTumbler={setSavedMoviesTumbler}
                handleFilter={handleSavedMoviesFilter}
                setSavedMoviesInputValue={setSavedMoviesInputValue}
                amountShowCards={amountShowCards}
                setAmountShowCards={setAmountShowCards}
                addShowCards={addShowCards}
                handleDeleteFilm={handleDeleteFilm}
                handleSaveFilm={handleSaveFilm}
                saveCards={saveCards}
                isPreloader={preloader}
                searchValue={savedMoviesInputValue}
                errorText={errorText}
                error={error}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute component={Profile} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            }
          />
          <Route path="/signup" element={<Register onSubmit={handleSignIn} loggedIn={loggedIn} />} />
          <Route path="/signin" element={<Login onSubmit={handleSignIn} loggedIn={loggedIn} />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
