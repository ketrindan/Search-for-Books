import {
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAILED,
  SET_REQUEST,
  LOAD_MORE_BOOKS, 
  FILTER_BOOKS,
  SORT_BOOKS
} from '../actions/books';
import { IBooksState } from '../../utils/types';
import { TBooksActions } from '../actions/books';

export const initialState: IBooksState = {
  books: [],
  request: '',
  sorting: 'relevance',
  filter: 'all',
  filteredBooks: [],
  startId: 0,
  totalResults: 0,
  filteredResults: 0,
  booksRequest: false,
  booksFailed: false
}

export const booksReducer = (state = initialState, action: TBooksActions) => {
  switch (action.type) {
    case GET_BOOKS_REQUEST: {
      return {
        ...state,
        booksRequest: true,
        booksFailed: false,
      };
    }
    case GET_BOOKS_SUCCESS: {
      return {
        ...state,
        booksRequest: false,
        books: [...state.books, ...action.payload.items],
        totalResults: action.payload.totalItems
      };
    }
    case GET_BOOKS_FAILED: {
      return {
        ...state,
        booksRequest: false,
        booksFailed: true,
      };
    }
    case SET_REQUEST: {
      return {
        ...state,
        request: action.payload,
        books: [],
        startId: 0,
        totalResults: 0,
        sorting: 'relevance',
        filter: 'all',
        filteredResults: 0
      };
    }
    case LOAD_MORE_BOOKS: {
      return {
        ...state,
        startId: state.startId + 30
      };
    }
    case FILTER_BOOKS: {
      if (action.payload !== 'all') {
        const filteredBooks = state.books.filter((book) => book.volumeInfo.categories?.map(
        (category: string) => category.toLowerCase()).includes(action.payload));

        return {
          ...state,
          filter: action.payload,
          filteredBooks: filteredBooks,
          filteredResults: filteredBooks.length
        }
      } else {
        return {
          ...state,
          filter: 'all',
          filteredBooks: [],
          filteredResults: 0
        }
      }
    }
    case SORT_BOOKS: {
      return {
        ...state,
        sorting: action.payload,
        books: [],
      };
    }
    default: {
      return state;
    }
  }
};