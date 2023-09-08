import { useSelector } from 'react-redux';
import mainStyles from './Main.module.css'
import Loader from '../Loader/Loader';
import BooksList from '../BooksList/BooksList';

function Main() {
  const { books, request, booksRequest, booksFailed, filteredBooks, filter} = useSelector(state => state.books);

  return (
    <section className={mainStyles.main}>
      { booksFailed ? (
        <p className={mainStyles.message}>
          An error occurred. 
          There may be a connection problem or the server is unavailable. 
          Try again later.
        </p>
      ) : (books.length === 0 && request.length > 0 && !booksRequest) ||
      (filter !== 'all' && filteredBooks.length === 0 && request.length > 0 && !booksRequest)? (
        <p className={mainStyles.message}>Nothing found</p>
      ) : request.length === 0 ? (
        <p className={mainStyles.message}>Start searching for books</p>
      ) : books.length > 0 ? (
        <BooksList />
      ) : (
        <></>
      )
    }
    { booksRequest && <Loader /> }
    </section>
  );
}

export default Main;