import React, { Component } from 'react'
import * as BooksAPI from '../sources/BooksAPI'


class Book extends Component {

  constructor(props){
    super(props)
    this.state = {
      value:""
    }
}


componentDidMount = () => {
    this.setState({shelf:this.props.book.shelf});
}

  render() {

    const { book } = this.props
    const { shelf } = this.state

    return (
        <div className="book">
              <div className="book-top">
                <div className='book-cover'
                    style={{ width: 128, height: 180, backgroundImage: `url(${(book.imageLinks) ? book.imageLinks.thumbnail : ""})`}}>
                </div>
                <div className="book-shelf-changer">
                    <select value={this.props.book.shelf}
                            id="book-shelf-optin" 
                            onChange={(event) => this.update(book.id, event.target.value)}>
                        <option >Move to...</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="currentlyReading">Currently Reading</option>
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
        );
  }

  update = (book="", shelf="") => {
    this.updateValue(shelf);
    this.updateShelfGetAll(book, shelf);
  }

  updateShelfGetAll = (book="", shelf="") => {
    this.setState({shelf});
    BooksAPI.update(book, shelf).then(() => this.props.getAll(shelf));
  }

  updateValue = (value="") => {
      this.setState({value});
  }
}

export default Book
