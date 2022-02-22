// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  return movies.map((movie) => movie.director);
}
// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  return movies.filter((movie) => movie.director === director);
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  const moviesByDirector = getMoviesFromDirector(movies, director);
  const suma = moviesByDirector.reduce((acc, movie) => acc + movie.score, 0);
  return suma / moviesByDirector.length;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(movies) {
  const moviesTitle = movies.map((movie) => movie.title);
  const moviesSort = moviesTitle.sort();
  return moviesSort.slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  if (movies.length > 0) {
    const moviesByYearAsc = movies
      .sort(function (a, b) {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      })
      .sort((a, b) => a.year - b.year);
    return moviesByYearAsc;
  } else {
    return new Array();
  }
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
