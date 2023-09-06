import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import BookInfo from '../BookInfo/BookInfo';
import book from '../../utils/api';

function App() {
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [foundBooks, setFoundBooks] = useState(null);
  const [totalFound, setTotalFound] = useState(null);
  const [chosenBook, setChosenBook] = useState(null);
  
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

  function getBook(id) {
    setLoading(true);
    setChosenBook(null);
    book.getBook(id)
    .then((book) => {
      setChosenBook(book);
      console.log(book)
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
      <Routes>
        <Route path='/' element={
          <Main foundBooks={foundBooks} totalFound={totalFound} 
            getBooks={getBooks} isError={isError} isLoading={isLoading}
          />
        }/>
        <Route path='/:id' element={
          <BookInfo getBook={getBook} book={chosenBook}/>
        }/>
      </Routes>

    </div>
  );
}

export default App;
