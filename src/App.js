import React from 'react';
import './App.css';
import BooksList from './containers/BooksList'

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
