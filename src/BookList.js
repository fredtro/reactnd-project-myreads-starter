import React from 'react';
import shelves from './util/Shelves';
import Book from './Book';

class BookList extends React.Component
{
    render(){
        return (

            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>

                {shelves.map((shelf) => (
                    <div key={shelf.slug} className="bookshelf">
                        <h2 className="bookshelf-title">{shelf.title}</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {this.props.books
                                    .filter((book) => (book.shelf === shelf.slug))
                                    .map((book) => (
                                        <Book key={book.id} book={book} shelves={shelves} />
                                    )
                                )}
                            </ol>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default BookList

