import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';
import PropTypes from 'prop-types';

const mapStateToProps = state => ({ books: state.books });

const BooksList = ({ books }) => {
  return (
    <div>
      <h1>BooksList</h1>
      <table>
        {books.map(book => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            category={book.category}
          />
        ))}
      </table>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(BooksList);
