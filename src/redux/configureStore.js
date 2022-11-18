import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { bookReducer } from './books/books';
import { categories } from './categories/categories';

const rootReducer = combineReducers({
  books: bookReducer,
  categories,
});

const store = configureStore({
  reducer: rootReducer,
},
applyMiddleware(thunk));

export default store;
