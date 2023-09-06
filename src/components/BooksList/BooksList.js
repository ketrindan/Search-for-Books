import { useState, useEffect } from 'react';
import booksListStyles from './BooksList.module.css';
import Book from '../Book/Book';
import MoreBooks from '../MoreBooks/MoreBooks';
import UpScrollBtn from '../UpscrollBtn/UpscrollBtn';

function BooksList(props) {
  const [shownBooks, setShownBooks] = useState([]);
  const request = localStorage.getItem('request')

  useEffect(() => {
    props.booksData && setShownBooks(props.booksData);
    console.log('dfg')
  }, [props.booksData])

  function handleMoreBooks() {
    /*const books = [...shownBooks];
    props.handleMoreBooks(request, shownBooks.length, 30);
    const moreBooks = [...books, ...props.booksData];
    setShownBooks(moreBooks);*/
  }

  return (
    <>
      <section className={booksListStyles.bookList}>
        <span className={booksListStyles.text}>Found {props.totalFound} results</span>
        <div className={booksListStyles.list}>
          {shownBooks.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </div>
      </section>
      {
        (props.booksData && props.booksData.length > 0 && shownBooks.length !== props.totalFound) 
        && <MoreBooks onClick={handleMoreBooks}/>
      }
      <UpScrollBtn />
    </>
  );
}

export default BooksList;