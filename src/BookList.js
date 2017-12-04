import React from 'react'

class BookList extends React.Component{


    render(){

        const shelves = [
            {
                title: 'Currently Reading',
                slug: 'currentlyReading'
            },
            {
                title: 'Want to Read',
                slug: 'wantToRead'
            },
            {
                title: 'Read',
                slug: 'read'
            }];

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
                                        <li>
                                            <div className="book">
                                                <div className="book-title">
                                                    {book.title}
                                                </div>
                                            </div>
                                        </li>
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

