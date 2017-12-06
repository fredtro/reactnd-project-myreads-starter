import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from "./util/BooksAPI";

class SearchPage extends React.Component{

    state = {
        query: '',
        books:[]
    };

    updateQuery(query){
        this.setState({query});
        BooksAPI.search(query, 5).then(
            (books) => {this.setState({books})}
        )
    }

    updateBook(book, shelf)
    {
        //remove book from results
        this.setState((state) => ({
            books: state.books.filter((b) => b.id !== book.id)
        }));
        this.props.updateBook(book, shelf);
    }

    render(){

        const books = this.state.books;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/"  className="close-search" />
                    <div className="search-books-input-wrapper">
                        <input type="text" onChange={(e) => (this.updateQuery(e.target.value))} value={this.state.query} placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {books.length > 0 && (
                            books.map((book) => (
                                <Book
                                    key={book.id}
                                    book={book}
                                    onBookUpdate={(book, shelf) => this.updateBook(book, shelf)}
                                />
                            ))
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchPage