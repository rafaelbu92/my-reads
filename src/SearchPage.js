import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import App from './App.js'
import * as BooksAPI from './BooksAPI.js'


class SearchPage extends Component{
    state = {
        books : []
    }

    componentDidMount() {
      BooksAPI.getAll().then((books) => {
        this.setState({ books })
      })
    }

    removeBook = (book) => {
      this.setState((state) => ({
        books: state.books.filter((b) => b.title !== book.title)
      }))
    }

    updateQuery = (query) => {
      this.setStage({query: query.trim()})
    }

    render() {
      return (
        <div className="search-books">
          <Link to="/search" className='search-book'>Search Page</Link>
              <div className="search-books">
                <div className="search-books-bar">
                  <Link
                    className="close-search"
                    to="/"
                  ></Link>
                  <div className="search-books-input-wrapper">
                    {
                      
                    }
                    <input
                      type="text"
                      placeholder="Search by title or author"
                      books={this.state.books}
                    />
                  </div>
                </div>
                <div className="search-books-results">
                  <ol className="books-grid"></ol>
                </div>
              </div>
        </div>
        )
      }
    }

export default SearchPage
