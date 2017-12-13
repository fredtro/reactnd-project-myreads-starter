import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from './util/BooksAPI';
import Loading from 'react-loading-spinner';
import _ from 'underscore';
import PropTypes from 'prop-types';

/**
 * @description Represents search view, allowing to search for books by using the BookAsPI
 */
class SearchPage extends React.Component {
  state = {
    query: '',
    books: [],
    loading: false
  };

  /**
   * @constructor
   */
  constructor() {
    super();
    this.performSearch = _.debounce(this.performSearch, 300);
  }

  /**
   * @param query
   */
  handleChange(query) {
    //save query in state for controlled input and set in loading state
    this.setState({ query: query, loading: true });

    //perform search on throttled method if query is given
    if (query.trim().length > 0) {
      this.performSearch(query);
    } else {
      this.setState({ loading: false, books: [] });
    }
  }

  /**
   * @description perform search on api
   * @param query
   */
  performSearch(query) {
    //perform book search on api
    BooksAPI.search(query).then(books => {
      this.setState(() => {
        if (books !== undefined && books.error !== 'empty query') {
          //take book from shelf if in result
          const result = books.map(book => {
            //search for book in books on shelf
            const onShelf = this.props.booksOnShelf.find(bookOnShelf => {
              return bookOnShelf.id === book.id;
            });
            return onShelf !== undefined ? onShelf : book;
          });

          return { loading: false, books: result };
        }

        //return empty array to clear out results on error
        return { loading: false, books: [] };
      });
    });
  }

  /**
   * @param book
   * @param shelf
   */
  updateBook(book, shelf) {
    this.props.updateBook(book, shelf);
  }

  render() {
    const books = this.state.books;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" />
          <div className="search-books-input-wrapper">
            <input
              type="text"
              onChange={e => this.handleChange(e.target.value)}
              value={this.state.query}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <Loading
            isLoading={this.state.loading}
            loadingClassName={'LoadingContainer'}
          >
            <ol className="books-grid">
              {books.length > 0 &&
                books.map(book => (
                  <li key={book.id}>
                    <Book
                      key={book.id}
                      book={book}
                      onBookUpdate={(book, shelf) =>
                        this.updateBook(book, shelf)
                      }
                    />
                  </li>
                ))}
            </ol>
          </Loading>
        </div>
      </div>
    );
  }
}

SearchPage.propTypes = {
  booksOnShelf: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired
};

export default SearchPage;
