import { useState, useEffect } from 'react';
import './App.css';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import book from '../../utils/api';

function App() {
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [foundBooks, setFoundBooks] = useState([]);
  
  function getBooks(request) {
    setLoading(true);
    book.getBooks(request)
    .then((books) => {
      console.log(books)
      setFoundBooks(books)
    })
    .catch((err) => {
      console.log(err);
      setIsError(true);
    })
    .finally(() => {
      setLoading(false);
    })
  }

  getBooks('js')

  return (
    <div className="app">
      <Header />

    </div>
  );
}

export default App;
