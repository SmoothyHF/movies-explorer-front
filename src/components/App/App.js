import React from "react";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import SavedMovies from "../SavedMovies/SavedMovies";
import Navigation from "../Navigation/Navigation";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../CurrentUserContext/CurrentUserContext";
import { register, login, updateUserData, getContent, getSavedMovies, SavedMovieStatus } from "../../utils/MainApi";
import getMovies from "../../utils/MoviesApi";
import searchMoviesFilter from "../../utils/SearchMoviesFilter";

function App() {

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const jwt = localStorage.getItem('jwt');


  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isNavigationOpen, setIsNavigationOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [moviesCards, setMoviesCards] = React.useState([]);
  const [savedMoviesCards, setSavedMoviesCards] = React.useState([]);
  const [moviesCardsError, setMoviesCardsError] = React.useState('');
  const [savedMoviesCardsError, setSavedMoviesCardsError] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    function handleTokenCheck() {
      if (jwt) {
        return getContent(jwt)
          .then((res) => {
            setLoggedIn(true);
            const userData = {
              name: res.name,
              email: res.email
            };
            setCurrentUser(userData)
            navigate(pathname, { replace: true });

            getSavedMovies(jwt)
              .then((movies) => {
                localStorage.setItem('saved-movies', JSON.stringify(movies));
                setSavedMoviesCards(JSON.parse(localStorage.getItem('saved-movies')));

                if (localStorage.getItem('filtered-movies') !== null) {
                  const localMovies = JSON.parse(localStorage.getItem('filtered-movies'));
                  setMoviesCards(localMovies);
                }
              })
              .catch(console.error)
          })
          .catch(console.error);
      }
    }

    handleTokenCheck();
    navigate('/movies', { replace: true })
  }, [jwt]);

  function handleRegister({ name, email, password }, handleErrorText) {
    return register(name, email, password)
    .then(() => login(email, password))
      .then(() => navigate('/movies'))
      .then(() => setLoggedIn(true))
      .catch(err => handleErrorText(err.status))
  }

  function handleLogin({ email, password }, handleErrorText) {
    return login(email, password).then((res) => {
      if (!res) throw new Error('Неправильные имя пользователя или пароль');
    })
      .then(() => {
        setLoggedIn(true)
      })
      .then(() => navigate('/movies'))
      .catch(err => handleErrorText(err.status))
  }

  function handleSignOut() {
    setLoggedIn(false);
    setCurrentUser('');
    localStorage.clear();
    setMoviesCards([]);
    setSavedMoviesCards([]);
    navigate('/', { replace: true });
  }

  function handleUpdateUserData(values, setFormSuccess, handleErrorText) {
    updateUserData(values, jwt)
      .then((data) => {
        setCurrentUser(data);
      })
      .then(() => setFormSuccess('Данные успешно обновлены'))
      .catch(err => handleErrorText(err.status))
  }

  function handleSearchMovies(values) {
    setMoviesCardsError('');

    if (localStorage.getItem('movies') !== null) {
      handleSearchMoviesLocal(values);
    } else {
      setIsLoading(true);
      getMovies()
        .then(res => localStorage.setItem('movies', JSON.stringify(res)))
        .then(() => handleSearchMoviesLocal(values))
        .then(() => setTimeout(() => localStorage.removeItem('movies'), 60 * 60 * 1000))
        .catch(() => setMoviesCardsError('Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'))
        .finally(() => setIsLoading(false));
    }
  }

  function handleSearchMoviesLocal(values) {
    const moviesCards = JSON.parse(localStorage.getItem('movies'));

    const filteredMoviesCards = searchMoviesFilter(values, moviesCards);

    setMoviesCards(filteredMoviesCards);

    if (filteredMoviesCards.length === 0) {
      setMoviesCardsError('Ничего не найдено');
    };

    localStorage.setItem('filtered-movies', JSON.stringify(filteredMoviesCards));
  }

  function handleSearchSavedMovies(values) {
    setSavedMoviesCardsError('');

    const savedMoviesCards = JSON.parse(localStorage.getItem('saved-movies'));

    const filteredSavedMoviesCards = searchMoviesFilter(values, savedMoviesCards);

    setSavedMoviesCards(filteredSavedMoviesCards);

    if (filteredSavedMoviesCards.length === 0) {
      setSavedMoviesCardsError('Ничего не найдено');
    }
  }

  function handleSaveMovie(movie, isSaved) {
    SavedMovieStatus(movie, isSaved, jwt)
      .then(() => getSavedMovies(jwt)
        .then(res => localStorage.setItem('saved-movies', JSON.stringify(res)))
        .then(() => setSavedMoviesCards(JSON.parse(localStorage.getItem('saved-movies'))))
        .catch(console.error)
      ).catch(console.error)
  }

  function handleOpenNav() {
    setIsNavigationOpen(true);
  };

  function handleCloseNav() {
    setIsNavigationOpen(false);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        {
          pathname === '/' ||
            pathname === '/movies' ||
            pathname === '/saved-movies' ||
            pathname === '/profile' ?
            <Header onMenuClick={handleOpenNav} loggedIn={loggedIn} />
            :
            ''
        }
        <main>
          <Routes >
            <Route path='/' element={<Main />} />

            <Route path='/movies' element={
              <ProtectedRoute element={
                <Movies
                  onSubmit={handleSearchMovies}
                  cards={moviesCards}
                  isLoading={isLoading}
                  errorMessage={moviesCardsError}
                  onSaveMovie={handleSaveMovie}
                />} isLoggedIn={loggedIn} />
            } />

            <Route path='/saved-movies' element={
              <ProtectedRoute element={
                <SavedMovies
                  cards={savedMoviesCards}
                  onSubmit={handleSearchSavedMovies}
                  errorMessage={savedMoviesCardsError}
                  onSaveMovie={handleSaveMovie}
                />} isLoggedIn={loggedIn} />
            } />

            <Route path='/profile' element={
              <ProtectedRoute element={
                <Profile
                  onSignOut={handleSignOut}
                  onUpdateUserData={handleUpdateUserData}
                />}
                isLoggedIn={loggedIn} />
            } />

            <Route path='/signup' element={<Register onRegister={handleRegister} />} />

            <Route path='/signin' element={<Login onLogin={handleLogin} />} />

            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        {
          pathname === '/' ||
            pathname === '/movies' ||
            pathname === '/saved-movies' ?
            <Footer />
            :
            ''
        }

        <Navigation isOpen={isNavigationOpen} onClose={handleCloseNav} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
