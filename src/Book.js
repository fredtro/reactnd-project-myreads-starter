import React from 'react';
import shelves from './util/Shelves';

/**
 * single book view, to display a book with controls to move to shelf
 */
function Book (props) {

    const { book } = props;

    return (
      <div className="book">
        <div
          className="book-top"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${book.imageLinks.thumbnail})`
          }}
        >
          <div className="book-shelf-changer">
            <select
              value={book.shelf ? book.shelf : 'none'}
              onChange={e => props.onBookUpdate(book, e.target.value)}
            >
              <option disabled>Move to...</option>
              {shelves.map(shelf => (
                <option key={shelf.slug} value={shelf.slug}>
                  {shelf.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors && book.authors.pop()}</div>
      </div>
    );
}

export default Book;
