import React from 'react';
import PropTypes from 'prop-types';
import cx from './SearchBar.module.scss';
import searchIcon from '../../assets/ic_Search@2x.png.png';

function SearchBar(props) {  
  return (
    <div className={[cx.SearchBar, props.fullWidth ? cx.SearchBar__fullWidth : ''].join(' ')}>
      <input autoComplete='off' className={cx.SearchBar__input} name="q" placeholder="Nunca dejes de buscar"/>
      <div className={cx.SearchBar__iconWrapper}>
      <img src={searchIcon} alt="Icon buscar"/>
    </div>
  </div>
 )
}

SearchBar.propTypes = {
  fullWidth: PropTypes.bool
}
export default SearchBar;