import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import './BookList'
import BookList from "./BookList"

class BooksApp extends React.Component {

    state = {
        books: []
    };

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({
                books: books
            });
        })
    }

    render() {
      return(<div className="app">
        <BookList books={this.state.books}/>
      </div>)
    }
}

export default BooksApp
