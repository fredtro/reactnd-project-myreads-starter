import React from 'react'
import * as BooksAPI from './util/BooksAPI'
import './App.css'
import './BookList'
import BookList from "./BookList"

class BooksApp extends React.Component {

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

    render() {
      return(<div className="app">
        <BookList books={this.state.books} onBookUpdate={(book, shelf) => this.updateBook(book, shelf)}/>
      </div>)
    }
}

export default BooksApp
