import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";

function SavedMovies({ cards, onSubmit, errorMessage, onSaveMovie }) {

    function handleSubmit(values) {
        onSubmit(values);
    }
    return (
        <section className='saved-movies'>
            <SearchForm onSubmit={handleSubmit} />
            <p className="saved-movies_error">{errorMessage}</p>
            <MoviesCardList>
                {cards.map(card => (
                    <MoviesCard key={card._id} card={card} onSaveMovie={onSaveMovie} />
                ))}
            </MoviesCardList>
        </section>
    )
}


export default SavedMovies;