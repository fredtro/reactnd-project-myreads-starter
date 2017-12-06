import React from 'react'
import * as BooksAPI from './util/BooksAPI'
import './App.css'
import Shelf from "./Shelf"
import shelves from "./util/Shelves";
import SearchPage from './SearchPage';

class BooksApp extends React.Component {

    state = {
        books: [],
        showSearchPage: false
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

      return(
          this.state.showSearchPage ? (
              <div className="search-books">
                  <div className="search-books-bar">
                      <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
                      <div className="search-books-input-wrapper">
                          {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                          <input type="text" placeholder="Search by title or author"/>

                      </div>
                  </div>
                  <div className="search-books-results">
                      <ol className="books-grid"></ol>
                  </div>
              </div>
          ): (
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
                      <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                  </div>
              </div>
          )
      )
    }
}

export default BooksApp
