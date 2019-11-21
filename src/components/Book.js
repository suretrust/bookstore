import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { book, removeBook } = props;

  const handleRemoveBook = () => removeBook(book.id);

  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td>
        <button type="button" onClick={handleRemoveBook}>x</button>
      </td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired
  }).isRequired,
  removeBook: PropTypes.func.isRequired
};

export default Book;
