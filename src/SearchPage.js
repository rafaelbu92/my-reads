import React from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import App from './App.js'


class SearchPage extends React.Component{
render() {

  return (
    <div className="search-books">
      <Route exact path="/search" component={SearchPage} render = {() => (
          <div className="search-books">
            <div className="search-books-bar">
              <Link
                className="close-search"
                to="/"
              ></Link>
              <div className="search-books-input-wrapper">
                {}
                <input type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
      )}/>
    </div>
    )
  }
}

export default SearchPage
