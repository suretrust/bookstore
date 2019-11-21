import React from 'react';
import PropTypes from 'prop-types';
import CATEGORIES from '../utilities/categories';

const CategoryFilter = ({ handleChange }) => {
  return (
    <div>
      <span>Filter By Categotries: </span>
      <select onChange={handleChange}>
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
