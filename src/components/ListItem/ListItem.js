import React from 'react';
import PropTypes from 'prop-types';
import cx from './ListItem.module.scss';

function ListItem(props) {
  const { itemData } = props;
  return (
    <div className={cx.ListItem}>      
      <div>{itemData.id}</div>
      <div>{itemData.title}</div>      
      <div>{itemData.picture}</div>
      <div>{itemData.condition}</div>
      <div>{itemData.free_shipping}</div>
    </div>
  );
}

ListItem.propTypes = {
  itemData: PropTypes.object.isRequired  
}

export default ListItem;