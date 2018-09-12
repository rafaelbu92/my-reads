import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import App from './App'
import * as BooksAPI from './BooksAPI'
import escapeRegExp from 'escape-string-regexp'
import Book from './Book'

class SearchPage extends Component {

  state = {
      books: [],
  }

  componentDidMount = () => {
    this.updateQuery("")
  }

  updateQuery = (query) => {
      if(query){
          BooksAPI.search(query)
            .then((books) => {
              if(books instanceof Array)  {
                  this.setState({books})
              }
              else {
                  this.setState({books: []})
              }
            });
        }
    }

  render() {
  const { books } = this.state

  return (
  <div>
    <Link to="/search" className='search-book'>Search Page</Link>
        <div className="search-books-bar">
                <Link
                  className="close-search"
                  to="/"
                ></Link>
                <form>
                  <div className="search-books-input-wrapper">
                        <input
                          type='text'
                          placeholder='Search books'
                          onChange={(event) => this.updateQuery(event.target.value)}
                        />
                  </div>
                </form>
        </div>
      {books.length!==0 && (
          <div className="search-books-results">
              <div className="search-books">
                  <ol className="books-grid">
                      {books.map((book) =>(
                          <li key={book.id} className='books-list'>
                              <Book book={book}/>
                          </li>
                        ))}
                    </ol>
                </div>
            </div>
            )}
            {(books.length===0) && (
                    <div className="search-results">
                          {`No book found`}
                    </div>
                  )}
              </div>
          )
      }
  }

export default SearchPage
