import React from 'react'
import './App.css'
import { Route } from 'react-router-dom';
import MainPage from "./MainPage";
import SearchPage from './SearchPage';
import * as BooksAPI from "./util/BooksAPI";

class BooksApp extends React.Component {

    state = {
        books: []
    };

    updateBook(book, shelf){
        BooksAPI.update(book, shelf);

        if(shelf === 'none'){
            delete book.shelf;
        }else{

        }

        if(this.state.books.indexOf(book) === -1){
            this.state.books.push(book);
        }

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

      return(
          <div className="app">
              <Route path="/" exact render={() => (
                <MainPage books={this.state.books} updateBook={(book, shelf) => (this.updateBook(book, shelf))}/>
              )} />
              <Route path="/search" render={() => (
                  <SearchPage updateBook={(book, shelf) => (this.updateBook(book, shelf))}/>
              )} />
          </div>)
    }
}

export default BooksApp
