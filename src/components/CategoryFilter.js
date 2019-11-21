import React from 'react'

const CategoryFilter = () => {

  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi'
  ];

  return (
    <div>
      <span>Filter By Categotries: </span>
      <select>
          {categories.map(e => (<option>{e}</option>))}
      </select>
    </div>
  );
}

export default CategoryFilter;