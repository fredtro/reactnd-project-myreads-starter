import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import './BookList'
import BookList from "./BookList"

class BooksApp extends React.Component {

  render() {
      return(<div className="app">
        <BookList/>
      </div>)
  }
}

export default BooksApp
