import bookInfoStyles from './BookInfo.module.css'
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import UpScrollBtn from '../UpscrollBtn/UpscrollBtn';

function BookInfo() {
  const { id } = useParams();

  const books = useSelector((state) => state.books.books);
  const book =  books.find((book)  => book.id === id)

  return (
    <section className={bookInfoStyles.bookInfo}>
      { book &&
          <div className={bookInfoStyles.item}>
            <div className={bookInfoStyles.image_box}>
              <img src={book.volumeInfo.imageLinks.thumbnail} alt="book cover" className={bookInfoStyles.image}/>
            </div>
            <div className={bookInfoStyles.info_container}>
              {
                book.volumeInfo.categories && <p className={bookInfoStyles.categories}>{book.volumeInfo.categories.join('/')}</p> 
              }
              <h3 className={bookInfoStyles.title}>{book.volumeInfo.title}</h3>
              {
                book.volumeInfo.authors && <p className={bookInfoStyles.author}>{book.volumeInfo.authors.join(', ')}</p> 
              }
              <div className={bookInfoStyles.container}>
                {
                  book.volumeInfo.description ? <p className={bookInfoStyles.description}>{book.volumeInfo.description}</p> 
                  : <div className={bookInfoStyles.box}>&#8212;</div>
                }
              </div>
            </div>
          </div> 
      }
      <UpScrollBtn />
    </section>
  );
}

export default BookInfo;