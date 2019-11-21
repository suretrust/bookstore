import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions';

const mapStateToProps = state => ({ books: state.books });

const BooksList = ({ books, removeBook }) => {
  return (
    <div>
      <h1>BooksList</h1>
      <table>
        <tbody>
          {books.map(book => (
            <Book key={book.id} book={book} removeBook={removeBook} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  removeBook: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { removeBook })(BooksList);
