import React from 'react';
import PropTypes from 'prop-types';
import '../styles/CategoryFilter.css'
import CATEGORIES from '../utilities/categories';

const CategoryFilter = ({ handleChange }) => {
  return (
    <div className="category-filter">
      <span className="filter-by">Filter By Categories: </span>
      <select onChange={handleChange} className="select">
        <option value="All">All</option>
        {CATEGORIES.map(e => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleChange: PropTypes.func.isRequired
};

export default CategoryFilter;
