import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import  SearchPage  from './SearchPage'
import Book from './Book'

const categories = {
  wantToRead: "Want to Read",
  read: "Read",
  currentlyReading: "Currently Reading"
}

class BooksApp extends React.Component {

  state = {
    books:[]
  }

  componentDidMount() {
      this.getAll()
  }

  render() {
    const {books} = this.state
    return (
        <div className="app">
          <Route exact path="/" render={() =>(
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <Book books={ books } categories={ categories } getAll={ this.getAll }/>
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

    getAll = () => {
      BooksAPI.getAll().then((books) => {
          this.setState({books})
      })
    }

  }


export default BooksApp
