import book from "../../utils/api";
import { IBooks, AppDispatch } from '../../utils/types';

export const GET_BOOKS_REQUEST = "GET_BOOKS_REQUEST";
export const GET_BOOKS_SUCCESS = "GET_BOOKS_SUCCESS";
export const GET_BOOKS_FAILED = "GET_BOOKS_FAILED";
export const SET_REQUEST = "SET_REQUEST";
export const LOAD_MORE_BOOKS = "LOAD_MORE_BOOKS";
export const SORT_BOOKS = "SORT_BOOKS";
export const FILTER_BOOKS = "FILTER_BOOKS";

export function getBooks(request: string, minInd: number, sorting: string) {
  return function(dispatch: AppDispatch) {
    dispatch({
      type: GET_BOOKS_REQUEST
    })
    book.getBooks(request, minInd, sorting)
    .then((books) => {
      if(books) {
        dispatch({
          type: GET_BOOKS_SUCCESS,
          payload: books,
        })
      } else {
        dispatch({
          type: GET_BOOKS_FAILED
        })
      }
    })
    .catch((err) => {
      dispatch({
        type: GET_BOOKS_FAILED
      })
      console.log(err)
    })
  }
}

export const setRequest = (request: string) => ({
  type: SET_REQUEST,
  payload: request
});

export const loadMoreBooks = () => ({
  type: LOAD_MORE_BOOKS,
});

export const sortBooks = (sorting: string) => ({
  type: SORT_BOOKS,
  payload: sorting,
});

export const filterBooks = (filter: string) => ({
  type: FILTER_BOOKS,
  payload: filter,
});

export interface IGetBooksRequest {
  readonly type: typeof GET_BOOKS_REQUEST;
};

export interface IGetBooksSuccess {
  readonly type: typeof GET_BOOKS_SUCCESS;
  readonly payload: IBooks;
};

export interface IGetBooksFailed {
  readonly type: typeof GET_BOOKS_FAILED;
};

export interface ISetRequest {
  readonly type: typeof SET_REQUEST;
  readonly payload: string;
};

export interface ILoadMoreBooks {
  readonly type: typeof LOAD_MORE_BOOKS;
};

export interface ISortBooks {
  readonly type: typeof SORT_BOOKS;
  readonly payload: string;
};

export interface IFilterBooks {
  readonly type: typeof FILTER_BOOKS;
  readonly payload: string;
};

export type TBooksActions = 
  | IGetBooksRequest
  | IGetBooksSuccess
  | IGetBooksFailed
  | ISetRequest
  | ILoadMoreBooks
  | ISortBooks
| IFilterBooks;

