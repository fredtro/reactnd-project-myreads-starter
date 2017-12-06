import React from 'react'
import './App.css'
import { Route } from 'react-router-dom';
import MainPage from "./MainPage";
import SearchPage from './SearchPage';

class BooksApp extends React.Component {

    render() {

      return(
          <div className="app">
              <Route path="/" exact render={() => (
                <MainPage/>
              )} />
              <Route path="/search" render={() => (
                  <SearchPage/>
              )} />
          </div>)
    }
}

export default BooksApp
