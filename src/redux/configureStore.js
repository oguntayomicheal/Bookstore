import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { bookReducer } from './books/books';
import { categories } from './categories/categories';

const rootReducer = combineReducers({
  bookReducer,
  categories,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
