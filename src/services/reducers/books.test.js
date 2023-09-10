import { booksReducer, initialState } from "./books";
import {
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAILED,
  SET_REQUEST,
  LOAD_MORE_BOOKS, 
  FILTER_BOOKS,
  SORT_BOOKS
} from '../actions/books';

const books = {
  items: [
    {
      id: "fsJSEAAAQBAJ",
      volumeInfo: {
        authors: ["Марио Каскиаро", "Лучано Маммино"],
        categories: ["Computers"],
        description: "Node.js – программная платформа, позволяющая легко и просто создавать масштабируемые серверные приложения на языке JаvаScript.В книге описаны асинхронная, однопоточная архитектура платформы, а также шаблоны асинхронного управления потоком выполнения и потоками данных. Рассмотрен подробный список реализаций распространенных, а также некоторых уникальных шаблонов проектирования в Node.js.Издание адресовано разработчикам и архитекторам программного обеспечения, обладающим основными навыками владения JavaScript и желающим получить глубокое понимание, как проектируются и разрабатываются приложения уровня предприятия на основе Node.js.",
        imageLinks: {
          smallThumbnail: "http://books.google.com/books/content?id=fsJSEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail: "http://books.google.com/books/content?id=fsJSEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        title: "Шаблоны проектирования Node.js"
      }
    },

    {
      id: "fsJSEAAAQBAJ",
      volumeInfo: {
        authors: ["Марио Каскиаро"],
        categories: ["Art"],
        description: "Node.js – программная платформа, позволяющая легко и просто создавать масштабируемые серверные приложения на языке JаvаScript.В книге описаны асинхронная, однопоточная архитектура платформы, а также шаблоны асинхронного управления потоком выполнения и потоками данных. Рассмотрен подробный список реализаций распространенных, а также некоторых уникальных шаблонов проектирования в Node.js.Издание адресовано разработчикам и архитекторам программного обеспечения, обладающим основными навыками владения JavaScript и желающим получить глубокое понимание, как проектируются и разрабатываются приложения уровня предприятия на основе Node.js.",
        imageLinks: {
          smallThumbnail: "http://books.google.com/books/content?id=fsJSEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail: "http://books.google.com/books/content?id=fsJSEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        title: "Шаблоны проектирования Node.js"
      }
    }
  ],
  totalItems: 2
}

const filtered = books.items.filter((book) => book.volumeInfo.categories.map((category) => category.toLowerCase()).includes('art'));
console.log(filtered.length)

describe('ingredients reducer', () => {
  it('should return the initial state', () => {
    expect(booksReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle GET_BOOKS_REQUEST', () => {
    expect(
      booksReducer(initialState, {
        type:   GET_BOOKS_REQUEST,
      })
    ).toEqual(
      {
        ...initialState,
        booksRequest: true,
        booksFailed: false,
      }
    )
  })
  
  it('should handle GET_BOOKS_SUCCESS', () => {
    expect(
      booksReducer(initialState, {
        type: GET_BOOKS_SUCCESS,
        payload: books,
      })
    ).toEqual(
      {
        ...initialState,
        booksRequest: false,
        books: books.items,
        totalResults: books.totalItems
      }
    )
  })

  it('should handle GET_BOOKS_FAILED', () => {
    expect(
      booksReducer(initialState, {
        type: GET_BOOKS_FAILED,
      })
    ).toEqual(
      {
        ...initialState,
        booksRequest: false,
        booksFailed: true,
      }
    )
  })

  it('should handle SET_REQUEST', () => {
    expect(
      booksReducer(initialState, {
        type: SET_REQUEST,
        payload: 'js',
      })
    ).toEqual(
      {
        ...initialState,
        request: 'js',
        books: [],
        startId: 0,
        totalResults: 0,
        sorting: 'relevance',
        filter: 'all',
        filteredResults: 0
      }
    )
  })

  it('should handle LOAD_MORE_BOOKS', () => {
    expect(
      booksReducer(initialState, {
        type: LOAD_MORE_BOOKS,
      })
    ).toEqual(
      {
        ...initialState,
        startId: 30
      }
    )
  })  

  it('should handle FILTER_BOOKS', () => {
    initialState.books = books.items;
    expect(
      booksReducer(initialState, {
        type: FILTER_BOOKS,
        payload: 'art',
      })
    ).toEqual(
      {
        ...initialState,
        filter: 'art',
        filteredBooks: filtered,
        filteredResults: filtered.length
      }
    )
  }) 

  it('should handle SORT_BOOKS', () => {
    expect(
      booksReducer(initialState, {
        type: SORT_BOOKS,
        payload: 'newest',
      })
    ).toEqual(
      {
        ...initialState,
        sorting: 'newest',
        books: [],
      }
    )
  }) 
})