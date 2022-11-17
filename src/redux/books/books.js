import { createAsyncThunk } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';
// action

const REMOVE__BOOK = 'bookstore/src/redux/books/REMOVE__BOOK';
const ADD__BOOK = 'bookstore/src/redux/books/ADD__BOOK';
const FETCH__BOOK = 'bookstore/src/redux/books/FETCH__BOOK';

export const addBook = (book) => ({
  type: ADD__BOOK,
  book,
});

export const removeBook = (id) => ({
  type: REMOVE__BOOK,
  id,
});

// Reducers

const bookList = [];

export const bookReducer = (state = bookList, action) => {
  switch (action.type) {
    case FETCH__BOOK:
      return action.fetchBks;
    case ADD__BOOK:
      return [...state, action.book];
    case REMOVE__BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

// Action to getbook from API
const fetchUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/g9zeM8PZcRnuqLGRDIob/books';

export const fetchBooks = createAsyncThunk(FETCH__BOOK, async (post, { dispatch }) => {
  const response = await fetch(fetchUrl);
  const data = await response.json();
  const books = Object.keys(data).map((key) => ({
    ...data[key][0],
    item_id: key,
  }));
  dispatch({
    type: FETCH__BOOK,
    fetchBks: books,
  });
});
