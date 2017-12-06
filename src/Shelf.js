import React from 'react';
import Book from './Book';

class Shelf extends React.Component
{
    render(){

        const { slug, title } = this.props;

        return (
            <div key={slug} className="bookshelf" >
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books
                            .map((book) => (
                                <Book key={book.id} book={book} onBookUpdate={(book, shelf) => this.props.onBookUpdate(book, shelf)} />
                            )
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Shelf

