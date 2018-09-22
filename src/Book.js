import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'


class Book extends Component {

  constructor(props){
    super(props)
    this.state = {
      shelf:""
    }
  }

  render() {

    const { book } = this.props
    const { shelf } = this.state

    console.log(shelf)
    return (
        <div className="book">
              <div className="book-top">
                <div className='book-cover'
                    style={{ width: 128, height: 180, backgroundImage: `url(${(book.imageLinks) ? book.imageLinks.thumbnail : ""})`}}>
                </div>
                <div className="book-shelf-changer">
                    <select onChange={(event) => this.updateShelfGetAll(book.id, event.target.value)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="wantToRead" >Want to Read</option>
                        <option value="wantToRead" >Want to Read</option>
                        <option value="currentlyReading" >Currently Reading</option>
                        <option value="read" >Read</option>
                        <option value="none" >None</option>
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
        );
  }

  updateShelfGetAll = (book="", shelf="") => {
      console.log("primeiro")
      console.log(this.state.shelf)
      this.setState({shelf})
      console.log("segundo")
      console.log(this.state.shelf)
      BooksAPI.update(book, shelf).then(() => this.props.getAll());
  }
}

export default Book
