import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import  SearchPage  from './SearchPage'
import BookMainList from './BookMainList'

const categories = [
  {"name":"Want to Read", "id":"1","type":"wantToRead"},
  {"name":"Currently Reading", "id":"3","type":"currentlyReading"},
  {"name":"Read", "id":"2","type":"read"}
]

class BooksApp extends React.Component {

    constructor(props){
      super(props)
      this.state = {
        books:[]
      }
    }


    componentDidMount() {
        this.getAll()
    }

    getAll = () => {
      BooksAPI.getAll().then((books) => {
          this.setState({books})
      })
    }

  render() {

    const { books } = this.state
    return (
        <div className="app">
          <Route exact path="/" render={() =>(
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <ol className='shelf-render'>
                  { categories.map(category => (
                    <li key={category.id}>
                      <h2 className="bookshelf-title">{category.name}</h2>
                        <BookMainList books={books} category={ category } getAll={this.getAll}/>
                    </li>
                  ))}
                  </ol>
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
          <Route exact path='/search' render={(props) => (
              <SearchPage getAll={this.getAll}/>
          )}/>
        </div>
      );
    }



  }


export default BooksApp
