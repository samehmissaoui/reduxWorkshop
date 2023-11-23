import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByTitle, filterByRate } from '../js/moviesActions';

const Filter = () => {
  const dispatch = useDispatch();

  const [titleFilter, setTitleFilter] = useState('');
  const [rateFilter, setRateFilter] = useState('');

  const handleTitleChange = (e) => {
    const title = e.target.value;
    setTitleFilter(title);
    dispatch(filterByTitle(title)); // Dispatch action to filter movies by title
  };

  const handleRateChange = (e) => {
    const rate = e.target.value;
    setRateFilter(rate);
    dispatch(filterByRate(Number(rate))); // Dispatch action to filter movies by rate
  };

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Filter by Title"
        value={titleFilter}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by Rate"
        value={rateFilter}
        onChange={handleRateChange}
      />
    </div>
  );
};

export default Filter;
