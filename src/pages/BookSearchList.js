import React, { Fragment } from 'react'
import Book from '../components/Book'


class BookSearchList extends React.Component {

  render() {
    const { books } = this.props
    return (
      <Fragment>
          <ol className="books-grid">
            {books.filter(book => !!book.id).map((book, index) => (
                <li key={index}>
                  <Book book={book} getAll={this.props.getAll}/>
                </li>
            ))}
          </ol>
      </Fragment>
    );
  }
}

export default BookSearchList
