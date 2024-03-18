export default function searchMoviesFilter(values, moviesCards) {
    const durationFilter = (card) => card.duration <= 40;
  
    const wordsFilter = (card) => {
      if (!values.words) {
        return true;
      }
      return card.nameRU.toLowerCase().includes(values.words.toLowerCase());
    };
  
    if (values.isShortFilm) {
      return moviesCards.filter(wordsFilter).filter(durationFilter);
    } else {
      return moviesCards.filter(wordsFilter);
    }
  }