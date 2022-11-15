// action
const RemoveBook = 'bookstore/src/redux/books/RemoveBook';
const AddBook = 'bookstore/src/redux/books/AddBook';

export const addBook = (book) => ({
  type: AddBook,
  book,
});

export const removeBook = (id) => ({
  type: RemoveBook,
  id,
});

// Reducers

export const bookReducer = (state = [], action) => {
  switch (action.type) {
    case AddBook:
      return [...state, action.book];
    case RemoveBook:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
