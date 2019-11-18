import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

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

export default connect(mapStateToProps)(BooksList);
