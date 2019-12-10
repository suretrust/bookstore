import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Book.css';

const Book = props => {
  const { book, removeBook } = props;

  const handleRemoveBook = () => removeBook(book.id);

  return (
    <div className="book">
      <div className="category">{book.category}</div>
      <div className="title">{book.title}</div>
      <div>
        <button type="button" onClick={handleRemoveBook} className="remove">
          Remove
        </button>
        <button type="button" className="comment">
          Comment
        </button>
        <button type="button" className="edit">
          Edit
        </button>
      </div>
    </div>
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
