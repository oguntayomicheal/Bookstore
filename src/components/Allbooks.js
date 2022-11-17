import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const Allbooks = () => {
  const booksArray = useSelector((state) => state.books);

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
