import React, { Fragment } from 'react'
import Book from '../components/Book'


class BookMainList extends React.Component {

  constructor(props){
    super(props)
  }

  render() {

    const { category, books } = this.props
    return (
      <Fragment>
        {Object.entries(books).map((books, id) => (
            <ol key={id} className='books-grid'>
              {(books[1]).map((book) => (
                (book.shelf === category.type && book.shelf !== undefined) ? (
                  <li key={book.id}>
                      <Book book={book} getAll={ this.props.getAll }/>
                  </li>
                  ):(
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

export default BookMainList
