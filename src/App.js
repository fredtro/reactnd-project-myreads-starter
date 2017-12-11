import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import MainPage from './MainPage';
import SearchPage from './SearchPage';
import * as BooksAPI from './util/BooksAPI';
import 'react-loading-spinner/src/css/index.css';

/**
 * @description My reads application
 */
class BooksApp extends React.Component {
  state = {
    books: []
  };

  /**
   * @description handles changing the shelf of a book
   *
   * @param book
   * @param shelf
   */
  updateBook(book, shelf) {
    BooksAPI.update(book, shelf);
    if (this.state.books.indexOf(book) === -1) {
      this.state.books.push(book);
    }
    //update state to re render with new result
    this.setState({});
  }

  /**
   * @description fetch books from api in did-mount lifecycle event
   */
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({
        books: books
      });
    });
  }

  render() {
    return (
      <div className="app">
        <Route
          path="/"
          exact
          render={() => (
            <MainPage
              books={this.state.books}
              updateBook={(book, shelf) => this.updateBook(book, shelf)}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchPage
              booksOnShelf={this.state.books}
              updateBook={(book, shelf) => this.updateBook(book, shelf)}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
