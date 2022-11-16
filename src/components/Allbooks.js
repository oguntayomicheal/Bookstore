/* eslint-disable react/prop-types */
import React from 'react';
import Book from './Book';
import { useSelector } from 'react-redux';

const Allbooks = () => {
  // const books = { props };
  // const booksArray = books.props.booklist;

  const booksArray = useSelector((state) => state.books)

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
