import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import  SearchPage  from './SearchPage.js'
import  Read  from './Read.js'
import  WantToRead  from './WantToRead.js'
import  CurrentlyReading  from './CurrentlyReading.js'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() =>(
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <CurrentlyReading />
              </div>
              <div>
                <WantToRead />
              </div>
                <Read />
              <div>
              </div>
            </div>
            <div className="open-search">
              <Link
                to="/search"
                className = "search-books"
              >Add a book</Link>
            </div>
          </div>
        )}/>
        <Route exact path="/search" component={SearchPage}/>
      </div>
    )
  }
}


export default BooksApp
