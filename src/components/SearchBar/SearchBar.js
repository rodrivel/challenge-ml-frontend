import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from './SearchBar.module.scss';
import IconSearch from '../IconSearch/IconSearch';
import { useHistory, useLocation } from 'react-router-dom';

function SearchBar(props) {
  
  const [searchValue, setSearchValue] = React.useState('');
  const history = useHistory();  
  let { search } = useLocation();
  
  useEffect(()=> {
    const query = new URLSearchParams(search);
    const q = query.get('q');
    setSearchValue(q || '');
  },[search]);

  const submitSearchHandler = (e) => {
    e.preventDefault();    
    const inputValue = e.target.q.value;
    if (inputValue && inputValue !== '') {
      history.push(`/items?q=${inputValue}`);
    }
  };
  
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    <form onSubmit={submitSearchHandler} className={[cx.SearchBar, props.fullWidth ? cx.SearchBar__fullWidth : ''].join(' ')} data-testid='search-form'>  
        <input autoComplete='off' className={cx.SearchBar__input} name="q" placeholder="Nunca dejes de buscar" value={searchValue} onChange={handleChange}/>
        <button className={cx.SearchBar__button} type="submit">
          <IconSearch/>
        </button>
    </form>
 )
}

SearchBar.propTypes = {
  fullWidth: PropTypes.bool
}
export default SearchBar;