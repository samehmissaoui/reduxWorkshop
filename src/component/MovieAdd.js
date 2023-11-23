import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs
import { addMovie } from '../js/moviesActions';

const AddMovie = () => {
  const dispatch = useDispatch();

  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterUrl: '',
    rate: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie({
      ...newMovie,
      [name]: value,
    });
  };

  const handleAddMovie = () => {
    const movieToAdd = {
      id: uuidv4(), // Generate a unique ID for the movie
      ...newMovie,
    };
    dispatch(addMovie(movieToAdd));
    // Reset the form after adding the movie
    setNewMovie({
      title: '',
      description: '',
      posterUrl: '',
      rate: 0,
    });
  };

  return (
    <div className="add-movie">
      <h2>Add New Movie</h2>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={newMovie.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={newMovie.description}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="posterUrl"
        placeholder="Poster URL"
        value={newMovie.posterUrl}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="rate"
        placeholder="Rate"
        value={newMovie.rate}
        onChange={handleInputChange}
      />
      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
};

export default AddMovie;
