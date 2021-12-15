import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import Profile from '../Auth/Profile/Profile';
import Register from '../Auth/Register/Register';
import Login from '../Auth/Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <>
            <Header />
            <Main />
            <Footer />
          </>
        }
      />
      <Route
        exact
        path="/movies"
        element={
          <>
            <Header />
            <Movies />
            <Footer />
          </>
        }
      />
      <Route
        exact
        path="/saved-movies"
        element={
          <>
            <Header />
            <Movies />
            <Footer />
          </>
        }
      />
      <Route
        exact
        path="/profile"
        element={
          <>
            <Header />
            <Profile />
          </>
        }
      />
      <Route
        exact
        path="/signup"
        element={
          <>
            <Register />
          </>
        }
      />
      <Route
        exact
        path="/signin"
        element={
          <>
            <Login />
          </>
        }
      />
      <Route
        exact
        path="/*"
        element={
          <>
            <PageNotFound />
          </>
        }
      />
    </Routes>
  );
}

export default App;
