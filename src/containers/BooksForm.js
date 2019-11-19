import React from 'react';

const BooksForm = () => {
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
      <form>
        <input type="text" placeholder="Book Title" />
        <select name="" id="">
          <option value="">Choose a category</option>
          {categories.map(category => (
            <option key={categories.indexOf(category)} value={category}>{category}</option>
          ))}
        </select>
        <input type="submit" value="Add a Book" />
      </form>
    </div>
  );
};

export default BooksForm;
