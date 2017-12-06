import React from 'react';
import * as BooksAPI from "./util/BooksAPI";
import Shelf from "./Shelf"
import shelves from "./util/Shelves";
import { Link } from 'react-router-dom';

class MainPage extends React.Component{

    state = {
        books: []
    };

    updateBook(book, shelf){
        BooksAPI.update(book, shelf);
        this.setState({});
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({
                books: books
            });
        })
    }

    render(){
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>

                {shelves.map((shelf) =>
                    <Shelf
                        key={shelf.slug}
                        slug={shelf.slug}
                        title={shelf.title}
                        books={this.state.books.filter((book) => book.shelf === shelf.slug)}
                        onBookUpdate={(book, shelf) => this.updateBook(book, shelf)}
                    />
                )}

                <div className="open-search">
                    <Link
                        to="/search"
                        className="add-contact"
                    >Add a book
                    </Link>
                </div>
            </div>
        );
    }

}

export default MainPage;