import React from 'react';
import PropTypes from 'prop-types';
import cx from './SearchBar.module.scss';
import searchIcon from '../../assets/ic_Search@2x.png.png';
import { useHistory } from 'react-router-dom';

function SearchBar(props) {

  const history = useHistory();  
  const submitSearchHandler = (e) => {
    e.preventDefault();    
    const searchValue = e.target.q.value;
    if (searchValue && searchValue !== '')      
      history.push(`/items?q=${searchValue}`);
  };
  
  return (
    <form onSubmit={submitSearchHandler} className={[cx.SearchBar, props.fullWidth ? cx.SearchBar__fullWidth : ''].join(' ')}>  
        <input autoComplete='off' className={cx.SearchBar__input} name="q" placeholder="Nunca dejes de buscar"/>
        <button className={cx.SearchBar__button} type="submit">
          <img src={searchIcon} alt="Icon buscar"/>
        </button>
    </form>    
 )
}

SearchBar.propTypes = {
  fullWidth: PropTypes.bool
}
export default SearchBar;