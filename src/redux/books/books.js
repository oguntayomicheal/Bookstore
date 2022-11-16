import { v4 as uuidv4 } from 'uuid';// action

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

const bookList = [
  {
    id: uuidv4(),
    title: 'Hello',
    author: 'Daniel',
  }, {
    id: uuidv4(),
    title: 'Welcome',
    author: 'Samuel',
  }, {
    id: uuidv4(),
    title: 'How',
    author: 'Mike',
  },
];

export const bookReducer = (state = bookList, action) => {
  switch (action.type) {
    case ADD__BOOK:
      return [...state, action.book];
    case REMOVE__BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
