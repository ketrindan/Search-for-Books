import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { booksReducer } from '../services/reducers/books'
import { combineReducers } from 'redux';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const reducer = combineReducers({
  books: booksReducer,
});

export const store = createStore(reducer, enhancer);