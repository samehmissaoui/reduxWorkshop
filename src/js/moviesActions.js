// actions.js
import { ADD_MOVIE, EDIT_MOVIE, FILTER_TITLE, FILTER_RATE } from './ActionTypes';

export const addMovie = (movie) => ({
  type: ADD_MOVIE,
  payload: movie,
});

export const editMovie = (updatedMovie) => ({
  type: EDIT_MOVIE,
  payload: updatedMovie,
});

export const filterByTitle = (title) => ({
  type: FILTER_TITLE,
  payload: title,
});

export const filterByRate = (rate) => ({
  type: FILTER_RATE,
  payload: rate,
});
