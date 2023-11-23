// reducers.js
import { ADD_MOVIE, EDIT_MOVIE, FILTER_TITLE, FILTER_RATE } from './ActionTypes';

const initialState = {
  movies: [], // Array of movie objects { title, description, posterUrl, rate }
  filteredMovies: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case EDIT_MOVIE:
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === action.payload.id ? action.payload : movie
        ),
      };
    case FILTER_TITLE:
      return {
        ...state,
        filteredMovies: state.movies.filter((movie) =>
          movie.title.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case FILTER_RATE:
      return {
        ...state,
        filteredMovies: state.movies.filter((movie) => movie.rate >= action.payload),
      };
    default:
      return state;
  }
};

export default movieReducer;
