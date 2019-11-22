import React from 'react';
import '../styles/App.css';
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

function App() {
  return (
    <div className="App">
      <nav>
        <li className="Bookstore-CMS">Bookstore CMS</li>
        <li className="books">BOOKS</li>
        <li className="categories">CATEGORIES</li>
        <li><i class="material-icons">account_circle</i></li>
      </nav>
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
