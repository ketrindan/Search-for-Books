import { FC } from 'react';
import headerStyles from './Header.module.css';
import Search from '../Search/Search';

const Header: FC = () => {
  return (
    <header className={headerStyles.header}>
      <h1 className={headerStyles.title}>Search for books</h1>
      <Search />
    </header>
  );
}

export default Header;