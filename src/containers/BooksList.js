import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const mapStateToProps = state => ({ books: state.books, filter: state.filter });

const mapDispatchToProps = dispatch => ({
  changeFilter: value => dispatch(changeFilter(value)),
  removeBook: id => dispatch(removeBook(id))
});

const BooksList = ({ books, removeBook, filter, changeFilter }) => {
  const handleFilterChange = e => {
    const { value } = e.target;
    changeFilter(value);
  };

  const filteredBooks = () =>
    filter === 'All' ? books : books.filter(book => book.category === filter);

  return (
    <div>
      <h1>BooksList</h1>
      <CategoryFilter handleChange={handleFilterChange} />
      <table>
        <tbody>
          {filteredBooks().map(book => (
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

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
