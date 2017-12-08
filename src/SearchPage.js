import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import * as BooksAPI from "./util/BooksAPI";

/**
 * Represents search view, allowing to search for books by using the BookAsPI
 */
class SearchPage extends React.Component{

    state = {
        query: '',
        books:[]
    };

    updateQuery(query){
        //save query in state for controlled input
        this.setState({query});

        //perform book search on api
        BooksAPI.search(query).then(

            (books) => {this.setState(() => {
                if(books !== undefined && books.error !== "empty query"){
                    //take book from shelf if in result
                    const result = books.map((book) => {
                        //search for book in books on shelf
                        const onShelf = this.props.booksOnShelf.find((bookOnShelf) =>{
                            return bookOnShelf.id === book.id;
                        });

                        return onShelf !== undefined ? onShelf : book;
                    });

                    return {books: result};
                }

                //return empty array to clear out results on error
                return {books : []};
            })}
        )
    }

    updateBook(book, shelf)
    {
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