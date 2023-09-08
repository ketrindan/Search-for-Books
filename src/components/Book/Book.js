import bookStyles from './Book.module.css';
import { Link } from 'react-router-dom';

function Book(props) {
  const { id } = props.book

  return (
    props.book.volumeInfo && <Link className={bookStyles.link} key={id} to={{pathname: `/${id}`}}>
      <article className={bookStyles.book}>
        { props.book.volumeInfo.imageLinks && props.book.volumeInfo.imageLinks.smallThumbnail ? <img src={props.book.volumeInfo.imageLinks.smallThumbnail} 
          alt="book cover" className={bookStyles.image}/> : <div className={bookStyles.image}></div> 
        }
        {
          props.book.volumeInfo.categories ? <p className={bookStyles.categories}>{props.book.volumeInfo.categories[0]}</p> 
          : <div className={bookStyles.box}></div>
        }
        <h3 className={bookStyles.title}>{props.book.volumeInfo.title}</h3>
        {
          props.book.volumeInfo.authors && <p className={bookStyles.author}>{props.book.volumeInfo.authors.join(', ')}</p>
        }
      </article>
    </Link>
  );
}

export default Book;