export function displayMovieData(movieDocument) {
   const updateMovieFormEl = document.querySelector("#update-movie-form");
   const { cover, title, year, genre, description } = movieDocument;

   updateMovieFormEl.title.value = title;
   updateMovieFormEl.year.valueAsNumber = year;
   updateMovieFormEl.genre.value = genre;
   updateMovieFormEl.description.value = description;
   updateMovieFormEl.cover.value = cover;
}
