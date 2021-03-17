import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from './SearchBar.module.scss';
import searchIcon from '../../assets/ic_Search@2x.png.png';
import { useHistory, useLocation } from 'react-router-dom';

function SearchBar(props) {
  
  const [searchValue, setSearchValue] = React.useState('');
  const history = useHistory();  
  const { search } = useLocation();
  
  useEffect(()=> {
    const query = new URLSearchParams(search);
    const q = query.get('q');    
    if (q) {
      setSearchValue(q);
    }
  },[search]);

  const submitSearchHandler = (e) => {
    e.preventDefault();    
    const searchValue = e.target.q.value;
    if (searchValue && searchValue !== '')      
      history.push(`/items?q=${searchValue}`);
  };
  
  return (
    <form onSubmit={submitSearchHandler} className={[cx.SearchBar, props.fullWidth ? cx.SearchBar__fullWidth : ''].join(' ')}>  
        <input autoComplete='off' className={cx.SearchBar__input} name="q" placeholder="Nunca dejes de buscar" defaultValue={searchValue}/>
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