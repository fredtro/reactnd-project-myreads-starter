import React from 'react';
import Shelf from './Shelf';
import shelves from './util/Shelves';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * Represents main page which display books on users shelf
 */
function MainPage(props) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>My Reads</h1>
      </div>

      {shelves
        .filter(shelf => shelf.slug !== 'none')
        .map(shelf => (
          <Shelf
            key={shelf.slug}
            slug={shelf.slug}
            title={shelf.title}
            books={props.books.filter(book => book.shelf === shelf.slug)}
            onBookUpdate={(book, shelf) => props.updateBook(book, shelf)}
          />
        ))}

      <div className="open-search">
        <Link to="/search" className="add-contact">
          Add a book
        </Link>
      </div>
    </div>
  );
}

MainPage.propTypes = {
  books: PropTypes.array.isRequired,
  updateBook: PropTypes.func.isRequired
};

export default MainPage;
