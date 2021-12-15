import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
    <Switch>
      <Route exact path="/">
        <Header />
        <Main />
        <Footer />
      </Route>
      <Route exact path="/movies">
        <Header />
        <Movies />
        <Footer />
      </Route>
      <Route exact path="/saved-movies">
        <Header />
        <Movies />
        <Footer />
      </Route>
      <Route exact path="/profile">
        <Header />
        <Profile />
      </Route>
      <Route exact path="/signup">
        <Register />
      </Route>
      <Route exact path="/signin">
        <Login />
      </Route>
      <Route exact path="/*">
        <PageNotFound />
      </Route>
    </Switch>
  );
}

export default App;
