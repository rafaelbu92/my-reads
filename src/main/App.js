import React from 'react'
import "../css/app.css"
import * as BooksAPI from "../sources/BooksAPI"
import { Link, Route } from 'react-router-dom'
import SearchPage from "../pages/SearchPage"
import BookMainList from "../pages/BookMainList"

const categories = [
  {"name":"Want to Read", "id":"1","type":"wantToRead"},
  {"name":"Currently Reading", "id":"3","type":"currentlyReading"},
  {"name":"Read", "id":"2","type":"read"}
]

class BooksApp extends React.Component {

    constructor(props){
      super(props)
      this.state = {
        books:[],
        shelf:""
      }
    }


    componentDidMount() {
        this.getAll()
    }

    getAll = () => {
      BooksAPI.getAll().then(({ books, list}) => {
          this.setState({books, list})
      })
    }

  render() {

    const { books, list } = this.state
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
              <SearchPage books={books} list={list} getAll={this.getAll}/>
          )}/>
        </div>
      );
    }



  }


export default BooksApp
