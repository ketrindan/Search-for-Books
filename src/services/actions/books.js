import book from "../../utils/api";

export const GET_BOOKS_REQUEST = "GET_BOOKS_REQUEST";
export const GET_BOOKS_SUCCESS = "GET_BOOKS_SUCCESS";
export const GET_BOOKS_FAILED = "GET_BOOKS_FAILED";
export const SET_REQUEST = "SET_REQUEST";
export const LOAD_MORE_BOOKS = "LOAD_MORE_BOOKS";
export const SORT_BOOKS = "SORT_BOOKS";
export const FILTER_BOOKS = "FILTER_BOOKS";

export function getBooks(request, minInd, sorting) {
  return function(dispatch) {
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

export const setRequest = (request) => ({
  type: SET_REQUEST,
  payload: request
});

export const loadMoreBooks = () => ({
  type: LOAD_MORE_BOOKS,
});

export const sortBooks = (sorting) => ({
  type: SORT_BOOKS,
  payload: sorting,
});

export const filterBooks = (filter) => ({
  type: FILTER_BOOKS,
  payload: filter,
});