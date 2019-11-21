import React from 'react';
import categories from '../utilities/categories';

const CategoryFilter = ({ handleChange }) => {
  return (
    <div>
      <span>Filter By Categotries: </span>
      <select onChange={handleChange}>
        <option value="All">All</option>
        {categories.map(e => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
