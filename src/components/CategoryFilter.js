import React from 'react'
import categories from '../utilities/categoriesgit'

const CategoryFilter = () => {

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