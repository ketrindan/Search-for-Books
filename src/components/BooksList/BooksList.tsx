import { useState, useEffect, FC } from 'react';
import { useDispatch, useSelector } from '../../hooks/hooks';
import booksListStyles from './BooksList.module.css';
import Book from '../Book/Book';
import MoreBooks from '../MoreBooks/MoreBooks';
import UpScrollBtn from '../UpscrollBtn/UpscrollBtn';
import { loadMoreBooks } from '../../services/actions/books';
import { IBook } from '../../utils/types';

const BooksList: FC = () => {
  const [shownBooks, setShownBooks] = useState<IBook[]>([]);

  const { books, totalResults, filteredBooks, filter, filteredResults } = useSelector(state => state.books);

  const dispatch = useDispatch();

  useEffect(() => {
    if (filter !== 'all') {
      filteredBooks && setShownBooks(filteredBooks)
    } else {
      books && setShownBooks(books);
    }
  }, [books, filteredBooks, filter])

  function handleMoreBooks() {
    dispatch(loadMoreBooks())
  }

  return (
    <>
      <section className={booksListStyles.bookList}>
        <span className={booksListStyles.text}>Found {filter !== 'all' ? filteredResults : totalResults} results</span>
        <div className={booksListStyles.list}>
          {shownBooks.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </div>
      </section>
      {
        shownBooks.length !== totalResults && shownBooks.length !== filteredResults
        && <MoreBooks onClick={handleMoreBooks}/>
      }
      <UpScrollBtn />
    </>
  );
}

export default BooksList;