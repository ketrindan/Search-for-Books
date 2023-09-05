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
      props.onSubmit(values.searchRequest, props.FilterSelected)
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
      <span className={searchStyles.error + (error ? searchStyles.error_active : "")}>{error}</span>
      <div className={searchStyles.container}>
        <div className={searchStyles.filter_box}>
          <label className={searchStyles.filter_title} htmlFor="categories">Categories</label>
          <select className={searchStyles.filter_list} id="categories">
            <option name="all">all</option>
            <option name="art">art</option>
            <option name="biography">biography</option>
            <option name="computers">computers</option>
            <option name="history">history</option>
            <option name="medical">medical</option>
            <option name="poetry">poetry</option>
          </select>
        </div>
        <div className={searchStyles.filter_box}>
          <label className={searchStyles.filter_title} htmlFor="sorting">Sorting by</label>
          <select className={searchStyles.filter_list} id="sorting">
            <option name="relevance">relevance</option>
            <option name="newest">newest</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Search;