import React from 'react';
import PropTypes from 'prop-types';
import cx from './Breadcrumb.module.scss';
import { ReactComponent as ArrowRight } from '../../assets/arrowRight.svg';

function Breadcrumb(props) {
  const { categories } = props;  

  return (
    <ul className={cx.Breadcrumb}>
      { categories.map((category, index) => <li className={cx.Breadcrumb__Item} key={`bc-${index}`}>{ index > 0 ? <ArrowRight/> : '' }<span>{category}</span></li> ) }      
    </ul>
  );
}

Breadcrumb.propTypes = {
  categories: PropTypes.array
}

export default Breadcrumb;