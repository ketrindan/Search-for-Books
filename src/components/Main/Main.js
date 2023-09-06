import mainStyles from './Main.module.css'
import Loader from '../Loader/Loader';
import BooksList from '../BooksList/BooksList';

function Main(props) {
  return (
    <section className={mainStyles.main}>
      {props.isLoading ? <Loader /> 
        : props.isError ? (
          <p className={mainStyles.message}>Во время запроса произошла ошибка. 
            Возможно, проблема с соединением или сервер недоступен. 
            Подождите немного и попробуйте ещё раз
          </p>
        )
        : props.foundBooks == null ? (
          <p className={mainStyles.message}>Начните поиск книг</p>
        )
        : props.foundBooks.length === 0 ? (
          <p className={mainStyles.message}>Ничего не найдено</p>
        ) : (
          <BooksList booksData={props.foundBooks} totalFound={props.totalFound} handleMoreBooks={props.getBooks}/>
        )
      }
    </section>
  );
}

export default Main;