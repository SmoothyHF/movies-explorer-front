import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList'
// import Preloader from './Preloader/Preloader'
import SearchForm from '../SearchForm/SearchForm';

function Movies() {
    return (
        <section className='movies'>
            <SearchForm />
            {/* <Preloader /> */}
            <MoviesCardList />
            <button className="movies__button">Ещё</button>
        </section>
    )
}


export default Movies;