import { createAsyncThunk } from '@reduxjs/toolkit';
// import { v4 as uuidv4 } from 'uuid';
// action

const REMOVE__BOOK = 'bookstore/src/redux/books/REMOVE__BOOK';
const ADD__BOOK = 'bookstore/src/redux/books/ADD__BOOK';
const FETCH__BOOK = 'bookstore/src/redux/books/FETCH__BOOK';
const fetchUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/g9zeM8PZcRnuqLGRDIob/books';

export const addBook = createAsyncThunk(ADD__BOOK, async (addBook, { dispatch }) => {
  await fetch(fetchUrl, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(addBook),
  });
  dispatch({
    type: ADD__BOOK,
    book: addBook,
  });
});

export const removeBook = createAsyncThunk(REMOVE__BOOK, async (itemId, { dispatch }) => {
  await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/g9zeM8PZcRnuqLGRDIob/books/${itemId}`, {
    method: 'DELETE',
  });
  dispatch({
    type: REMOVE__BOOK,
    id: { itemId },
  });
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
      return state.filter((book) => book.item_id !== action.id.itemId);
    default:
      return state;
  }
};

// Action to getbook from API

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
