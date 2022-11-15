// action
const REMOVE__BOOK = 'bookstore/src/redux/books/REMOVE__BOOK';
const ADD__BOOK = 'bookstore/src/redux/books/ADD__BOOK';

export const addBook = (book) => ({
  type: ADD__BOOK,
  book,
});

export const removeBook = (id) => ({
  type: REMOVE__BOOK,
  id,
});

// Reducers

export const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD__BOOK:
      return [...state, action.book];
    case REMOVE__BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
