import {Action, ActionCreator} from "redux";
import {ThunkAction}from "redux-thunk";
import { store } from "../services/store";
import { TBooksActions } from "../services/actions/books";

export interface IBookInfo {
  authors?: string[],
  categories?: string[],
  description: string,
  imageLinks: {
    smallThumbnail: string,
    thumbnail: string
  },
  title: string
}

export interface IBook {
  accessInfo: Object,
  etag: string,
  id: string,
  kind: string;
  saleInfo: Object,
  searchInfo: Object,
  selfLink: string,
  volumeInfo: IBookInfo,
}

export interface IBooks {
  items: IBook[],
  kind: string,
  totalItems: number
}

export interface IBooksState {
  books: IBook[],
  request: string,
  sorting: string,
  filter: string,
  filteredBooks: IBook[],
  startId: number,
  totalResults: number,
  filteredResults: number,
  booksRequest: boolean,
  booksFailed: boolean
};

export interface ILoadMoreBooksProps {
  onClick: () => void;
}

export interface IBookProps {
  book: IBook;
}


export type TRequest = {searchRequest: string};

type TApplicationActions  = | TBooksActions;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>; 

export type AppDispatch = typeof store.dispatch; 