import React, { Fragment } from 'react'
import Book from './Book'


class BookSearchList extends React.Component {

  constructor(props){
    super(props)
  }

  render() {

    const { books } = this.props
    return (
      <Fragment>
        {Object.entries(books).map((books, id) => (
          <ol key={id} className='books-grid'>
              {(books[1]).map((book) => (
                (book !== undefined) ? (
                  <li key={book.id}>
                    <Book book={book} getAll={this.props.getAll}/>
                  </li>
                ) : (
                  <li key={book.id}>
                      <div></div>
                  </li>
                )
              ))}
          </ol>
          ))}
      </Fragment>
    );
  }
}

export default BookSearchList
