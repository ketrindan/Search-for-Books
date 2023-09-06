import headerStyles from './Header.module.css';
import Search from '../Search/Search';

function Header(props) {
  return (
    <header className={headerStyles.header}>
      <h1 className={headerStyles.title}>Search for books</h1>
      <Search onSubmit={props.onBooksSearch}/>
    </header>
  );
}

export default Header;