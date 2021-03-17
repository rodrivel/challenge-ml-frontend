import React from 'react';
import PropTypes from 'prop-types';
import cx from './ListItem.module.scss';
import { Link } from 'react-router-dom';
import iconFreeShipping from '../../assets/ic_shipping@2x.png.png';


function currencyFormat(num)
{
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return num_parts.join(",");
}

function ListItem(props) {
  const { itemData } = props;
  const { price } = itemData;
  return (
    <div className={cx.ListItem}>
      <Link to={`/items/${itemData.id}`} className={cx.ListItem__Link}>
        <div className={cx.ListItem__ImgWrapper}>
          <img src={itemData.picture} alt={`Imagen ${itemData.title}`}/>
        </div>
        <div className={cx.ListItem__MainInfo}>
          <div className={cx.ListItem__MainInfo__Price}>
            <div className={cx.ListItem__MainInfo__Price__Block}>
              <span>{price.currency === 'ARS' ? '$ ' : price.currency }{currencyFormat(price.amount)}</span>
              { itemData.free_shipping && <span><img width={20} src={iconFreeShipping}/></span> }
            </div>
          </div>
          <div className={cx.ListItem__MainInfo__Title}>{itemData.title}</div>          
        </div>
        <div className={cx.ListItem__SecondaryInfo}>
          Capital Federal
        </div>        
      </Link>
      <div className={cx.ListItem__Divider}></div>
    </div>
  );
}

ListItem.propTypes = {
  itemData: PropTypes.object.isRequired  
}

export default ListItem;