import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import BookInfo from '../BookInfo/BookInfo';
import { getBooks } from '../../services/actions/books';

function App() {
  const booksState = useSelector(state => state.books);
  const { request, sorting, startId } = booksState;

  const dispatch = useDispatch();

  useEffect(() => {
    if (request.length > 0)
    dispatch(getBooks(request, startId, sorting))
  }, [dispatch, request, sorting, startId])


  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={
          <Main />
        }/>
        <Route path='/:id' element={
          <BookInfo />
        }/>
      </Routes>

    </div>
  );
}

export default App;
