import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../sources/BooksAPI'
import BookSearchList from './BookSearchList'

class SearchPage extends Component {

  constructor(props){
    super(props)
    this.state ={
      books:[]
    }
  }


  updateQuery = (query) => {
      if(query){
          const { list: propsList } = this.props
          BooksAPI.search(query)
            .then((books) => {
              let list = [];
              if(books instanceof Object) {
                Object.values(books).forEach(storeBooks => {
                  storeBooks.forEach(book => {
                    const shelfBook = propsList.find(item => item.title === book.title)
                    if (shelfBook) {
                      book.shelf = shelfBook.shelf
                    }
                    list.push(book)
                  })
                })
              }else{
                this.setState({books:[]});
              }
              this.setState({books:list});
            })
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
        <div className="search-books-results">
            <div className="search-books">
              <BookSearchList books={books} search={this.search} getAll = {this.props.getAll}/>
            </div>
        </div>
  </div>

        )
    }

    search = () => {
      BooksAPI.search().then((books) => {
          this.setState({books})
      })
    }
}

export default SearchPage
