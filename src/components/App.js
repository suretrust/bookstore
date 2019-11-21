import React from 'react';
import '../styles/App.css';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

function App() {
  return (
    <div className="App">
      <h1>Book Store</h1>
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
