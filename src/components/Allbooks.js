import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import { fetchBooks } from '../redux/books/books';

const Allbooks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const booksArray = useSelector((state) => state.books);

  return (
    <div>
      <ul>
        {booksArray.map((eachBook) => (
          <Book key={eachBook.item_id} book={eachBook} />
        ))}
      </ul>
    </div>
  );
};

export default Allbooks;
