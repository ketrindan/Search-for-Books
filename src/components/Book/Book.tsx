import bookStyles from './Book.module.css';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IBookProps } from '../../utils/types';

const Book: FC<IBookProps> = ({ book }) => {
  const { id } = book

  return (
    book.volumeInfo && <Link className={bookStyles.link} key={id} to={{pathname: `/${id}`}}>
      <article className={bookStyles.book}>
        { book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail ? <img src={book.volumeInfo.imageLinks.smallThumbnail} 
          alt="book cover" className={bookStyles.image}/> : <div className={bookStyles.image}></div> 
        }
        {
          book.volumeInfo.categories ? <p className={bookStyles.categories}>{book.volumeInfo.categories[0]}</p> 
          : <div className={bookStyles.box}></div>
        }
        <h3 className={bookStyles.title}>{book.volumeInfo.title}</h3>
        {
          book.volumeInfo.authors && <p className={bookStyles.author}>{book.volumeInfo.authors.join(', ')}</p>
        }
      </article>
    </Link>
  );
}

export default Book;