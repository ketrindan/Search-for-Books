import moreBooksStyles from './MoreBooks.module.css'

function MoreBooks(props) {
  return (
    <section className={moreBooksStyles.more}>
      <button type="button" className={moreBooksStyles.more_btn} onClick={props.onClick}>Show more</button>
    </section>
  )
}

export default MoreBooks;