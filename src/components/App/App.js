import { useState, useEffect } from 'react';
import './App.css';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import BooksList from '../BooksList/BooksList';
import book from '../../utils/api';

function App() {
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [foundBooks, setFoundBooks] = useState(null);
  const [totalFound, setTotalFound] = useState(null);
  
  function getBooks(request, minInd, maxNum) {
    setLoading(true);
    book.getBooks(request, minInd, maxNum)
    .then((books) => {
      console.log(books)
      setFoundBooks(books.items);
      setTotalFound(books.totalItems)
    })
    .catch((err) => {
      console.log(err);
      setIsError(true);
    })
    .finally(() => {
      setLoading(false);
      setIsError(false);
    })
  }

  return (
    <div className="app">
      <Header onBooksSearch={getBooks}/>
      {isLoading ? <Loader /> 
        : isError ? (
          <p className="message">Во время запроса произошла ошибка. 
            Возможно, проблема с соединением или сервер недоступен. 
            Подождите немного и попробуйте ещё раз
          </p>
        )
        : foundBooks === null ? (
          <section className="empty"></section>
        )
        : foundBooks.length === 0 ? (
          <p className="message">Ничего не найдено</p>
        ) : (
          <BooksList booksData={foundBooks} totalFound={totalFound} handleMoreBooks={getBooks}/>
        )
      }

    </div>
  );
}

export default App;
