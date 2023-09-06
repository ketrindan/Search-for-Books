import bookInfoStyles from './BookInfo.module.css'
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import Loader from '../Loader/Loader';
import UpScrollBtn from '../UpscrollBtn/UpscrollBtn';

function BookInfo(props) {
  const { id } = useParams();

  useEffect(() => {
    props.getBook(id);
  }, [id])

  return (
    <section className={bookInfoStyles.bookInfo}>
      { props.isLoading ? <Loader /> 
        : props.isError ? (
          <p className={bookInfoStyles.message}>Во время запроса произошла ошибка. 
            Возможно, проблема с соединением или сервер недоступен. 
            Подождите немного и попробуйте ещё раз
          </p>
        )
        : 
        ( props.book != null &&
          <div className={bookInfoStyles.item}>
            <div className={bookInfoStyles.image_box}>
              <img src={props.book.volumeInfo.imageLinks.thumbnail} alt="book cover" className={bookInfoStyles.image}/>
            </div>
            <div className={bookInfoStyles.info_container}>
              {
                props.book.volumeInfo.categories && <p className={bookInfoStyles.categories}>{props.book.volumeInfo.categories.join('/')}</p> 
              }
              <h3 className={bookInfoStyles.title}>{props.book.volumeInfo.title}</h3>
              {
                props.book.volumeInfo.authors && <p className={bookInfoStyles.author}>{props.book.volumeInfo.authors.join(', ')}</p> 
              }
              <div className={bookInfoStyles.container}>
                {
                  props.book.volumeInfo.description ? <p className={bookInfoStyles.description}>{props.book.volumeInfo.description}</p> 
                  : <div className={bookInfoStyles.box}>&#8212;</div>
                }
              </div>
            </div>
          </div> 
        )
      }
      <UpScrollBtn />
    </section>
  );
}

export default BookInfo;