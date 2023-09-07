import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import searchStyles from './Search.module.css';
import useForm from '../../hooks/useForm';

function Search(props) {
  const [error, setError] = useState('');

  const { values, isValid, onChange } = useForm({
    searchRequest: "",
  })

  function handleSearchSubmit(e) {
    e.preventDefault();
    if (!isValid) {
      setError('Нужно ввести ключевое слово');
      return
    } else {
      props.onSubmit(values.searchRequest, 0, 30);
      localStorage.setItem('request', values.searchRequest);
      setError('');
    }
  }

  return (
    <div className={searchStyles.search}>
      <form className={searchStyles.form} noValidate onSubmit={handleSearchSubmit}>
        <input className={searchStyles.input} type="text"
          placeholder="Enter your request" required name="searchRequest" 
          value={values.searchRequest} onChange={onChange} 
        />
        <button className={searchStyles.submit_btn} type="submit"></button>
      </form>
      <span className={searchStyles.error + (error ? " "+ searchStyles.error_active : "")}>{error}</span>
      <div className={searchStyles.container}>
        <div className={searchStyles.filter_box}>
          <label className={searchStyles.filter_title} htmlFor="categories">Categories</label>
          <select className={searchStyles.filter_list} id="categories">
            <option value="all">all</option>
            <option value="art">art</option>
            <option value="biography">biography</option>
            <option value="computers">computers</option>
            <option value="history">history</option>
            <option value="medical">medical</option>
            <option value="poetry">poetry</option>
          </select>
        </div>
        <div className={searchStyles.filter_box}>
          <label className={searchStyles.filter_title} htmlFor="sorting">Sorting by</label>
          <select className={searchStyles.filter_list} id="sorting">
            <option value="relevance">relevance</option>
            <option value="newest">newest</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Search;