import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import App from './App.js'
import * as BooksAPI from './BooksAPI.js'

class SearchPage extends Component{

    constructor(props){
      super(props);
      this.state = {
        filterByAuthorValue: "",
        books : []
      }
    }

    componentDidMount(){
      BooksAPI.getAll().then(result => {this.setState({books:result})})
    }

    filterByAuthor = (author) => {
      this.setState({filterByAuthorValue: author})
    }

    render() {

      const filteredBooks = this.state.filterByAuthorValue
          ? this.state.books.filter(b => b.author !== this.state.val)
          : this.state.books

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
                    <input
                      type="text"
                      placeholder="Search by title or author"
                      onChange={val => this.filterByAuthor(val.target.value)}
                    />
                  </div>
                </div>
                <div className="search-books-results">
                  <ol className="books-grid">
                    {filteredBooks && filteredBooks.map((books) =>(
                      <li key={books.id} className='books-list-item'>
                        <div className='book-cover'
                        style={{backgroundImage: `url(${books.covers})`}}/>
                        <div className='book-title'>
                          <p>{books.title}</p>
                        </div>
                        <div className='book-authors'>
                          <p>{books.authors}</p>
                        </div>
                      </li>
                    )
                    )}
                  </ol>
                </div>
              </div>
        </div>
        )
      }
    }

export default SearchPage
