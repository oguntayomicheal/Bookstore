/* eslint-disable react/prop-types */
import React from 'react';
import Book from './Book';

const Allbooks = (props) => {
  const books = { props };
  const booksArray = books.props.booklist;

  return (
    <div>
      <ul>
        {booksArray.map((eachBook) => (
          <Book key={eachBook.id} book={eachBook} />
        ))}
      </ul>
    </div>
  );
};

export default Allbooks;
