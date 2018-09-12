import React, { Component, Fragment } from 'react'
import * as BooksAPI from './BooksAPI'


class Book extends React.Component {

  updateShelf = (book="", shelf="") => {
    BooksAPI.update(book, shelf).then(() => this.props.getAll());
  }

  render() {

    const { books, categories } = this.props


    return (
      <Fragment>
        { Object.entries(books).map(([shelf, books]) => (
          <div className="bookshelf" key={ shelf }>
            <h2 className="bookshelf-title">{categories[shelf]}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                  { books.map(book => (
                    <li key={book.id}>
                      <div className="book">
                        <div className="book-top">
                        <div className='book-cover'
                          style={{ width: 128, height: 180, backgroundImage: `url(${(book.imageLinks) ? book.imageLinks.thumbnail : ""})`}}>
                        </div>
                        <div className="book-shelf-changer">
                          <select onChange={(event) => this.updateShelf(book.id, event.target.value)}>
                            <option value="move">Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                        </div>
                        <div className='book-title'>
                          <p>{book.title}</p>
                        </div>
                        <div className='book-authors'>
                          <p>{book.authors}</p>
                        </div>
                      </div>
                    </li>
                  ))}
              </ol>
            </div>
          </div>
        ))}
      </Fragment>
    )
  }
}
export default Book
