import React, { Component } from 'react'
import  ShelfChanger  from './ShelfChanger.js'




class Book extends React.Component {

  render() {

    const { book } = this.props

    return (
      <div>
          <div className="book">
            <div className="book-top">
                <div className='book-cover'
                  style={{ width: 128, height: 180, backgroundImage: `url(${(book.imageLinks) ? book.imageLinks.thumbnail : ""})`}}>
                </div>
                <div>
                  <ShelfChanger />
                </div>
            </div>
            <div className='book-title'>
              <p>{book.title}</p>
            </div>
            <div className='book-authors'>
              <p>{book.authors}</p>
            </div>
          </div>
      </div>
        )
    }
}
export default Book
