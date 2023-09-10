import { FC } from 'react';
import moreBooksStyles from './MoreBooks.module.css'
import { ILoadMoreBooksProps } from '../../utils/types';

const MoreBooks: FC<ILoadMoreBooksProps> = ({onClick}) => {
  return (
    <section className={moreBooksStyles.more}>
      <button type="button" className={moreBooksStyles.more_btn} onClick={onClick}>Show more books</button>
    </section>
  )
}

export default MoreBooks;