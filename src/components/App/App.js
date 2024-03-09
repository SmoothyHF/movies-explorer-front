import React, { useEffect } from "react";
import { Route, Routes, useLocation } from 'react-router-dom';

import './App.css';
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

function App() {

  const { pathname } = useLocation();

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isNavigationOpen, setIsNavigationOpen] = React.useState(false)

  function handleOpenNav() {
    setIsNavigationOpen(true);
  };

  function handleCloseNav() {
    setIsNavigationOpen(false);
  };

  function auth() {
    setLoggedIn(true);
  };
  useEffect(() => {
    auth();
  }, []);

  return (
    <div className="App">
      {
        pathname === '/' ||
          pathname === '/movies' ||
          pathname === '/saved-movies' ||
          pathname === '/profile' ?
          <Header onMenuClick={handleOpenNav} loggedIn={loggedIn}/>
          :
          ''
      }
      <Routes>
        <Route path='/' element={ <Main />} />

        <Route path='/movies' element={<Movies />} />

        <Route path='/saved-movies' element={<SavedMovies />} />

        <Route path='/signup' element={<Register />} />

        <Route path='/signin' element={<Login />} />

        <Route path='/profile' element={<Profile />} />

        <Route path='/404' element={<NotFound />} />
      </Routes>
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
  );
}

export default App;
