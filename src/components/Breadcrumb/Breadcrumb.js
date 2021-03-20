import React from 'react';
import PropTypes from 'prop-types';
import cx from './Breadcrumb.module.scss';
import { ReactComponent as ArrowRight } from '../../assets/arrowRight.svg';

const breadcrumb = (props) => {
  const { categories } = props;  

  return (
    <ul className={cx.Breadcrumb}>
      { categories && categories.map((category, index) => <li className={cx.Breadcrumb__Item} key={`bc-${index}`}>{ index > 0 ? <ArrowRight/> : '' }<span>{category}</span></li> ) }      
    </ul>
  );
}

breadcrumb.propTypes = {
  categories: PropTypes.array.isRequired
}

export default breadcrumb;