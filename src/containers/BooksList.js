import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const mapStateToProps = state => ({ books: state.books });

const BooksList = ({ books }) => {
  return (
    <div>
      <h1>BooksList</h1>
      <table>
        <tbody>
          {books.map(book => (
            <Book key={book.id} book={book} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default connect(mapStateToProps)(BooksList);
