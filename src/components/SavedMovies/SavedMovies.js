import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {
    return (
        <section className='saved-movies'>
            <SearchForm />
            {/* <Preloader /> */}
            <MoviesCardList />
        </section>
    )
}


export default SavedMovies;