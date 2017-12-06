import React from 'react';
import Book from './Book';
import sortBy from 'sort-by';

function Shelf(props)
{
    const { slug, title } = props;
    const books = props.books.sort(sortBy('title'));

    return (
        <div key={slug} className="bookshelf" >
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books
                        .map((book) => (
                            <Book key={book.id} book={book} onBookUpdate={(book, shelf) => props.onBookUpdate(book, shelf)} />
                        )
                    )}
                </ol>
            </div>
        </div>
    )
}

export default Shelf

