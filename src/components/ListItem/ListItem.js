import React from 'react';
import PropTypes from 'prop-types';
import cx from './ListItem.module.scss';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import IconShipping from '../IconShipping/IconShipping';
import { currencyFormat } from '../../helpers/currencyFormat';


const listItem = ({ itemData }) => {  
  const { price } = itemData;
  
  return (
      <li className={cx.ListItem} data-item-id={itemData && itemData.id}>
        <div className={cx.ListItem__Wrapper}>
          <div className={cx.ListItem__ImgWrapper}>
            <Link to={`/items/${itemData.id}`} className={cx.ListItem__Link}>
              { itemData.picture 
                ? <img src={itemData.picture} alt={`Imagen ${itemData.title}`}/>
                : <Skeleton style={{ width: '180px', height: '180px'}}/>
              }              
            </Link>
          </div>
          <div className={cx.ListItem__MainInfo}>
            <Link to={`/items/${itemData.id}`} className={cx.ListItem__Link}>
                { itemData.price 
                  ? (
                    <div className={cx.ListItem__MainInfo__Price}>
                      <div className={cx.ListItem__MainInfo__Price__Block}>
                        <span>{price && price.currency === 'ARS' ? '$ ' : price.currency }{currencyFormat(price.amount)}</span>
                        { itemData.price.decimals > 0 ? <span className={cx.ListItem__MainInfo__Price__Decimals }>{ itemData.price.decimals }</span> : null }
                        { itemData.free_shipping && <span><IconShipping/></span> }
                      </div>
                    </div>
                  )
                  : <Skeleton height={30} width={150} style={{ marginBottom: '20px'}}/>
                }
              
              { itemData.title 
                ? <h2 className={cx.ListItem__MainInfo__Title}>{itemData.title}</h2>
                : <Skeleton style={{ marginTop: '8px', display: 'block'}} width={'100%'} count={2}/>
              }         
            </Link>
            <div className={cx.ListItem__SecondaryInfo}>
              { itemData && itemData.address?.state_name 
                  ? <div className={cx.ListItem__SecondaryInfo__StateName}>{itemData.address.state_name}</div>
                  : <Skeleton width={100}/>
                }
            </div>          
          </div>                   
        </div>
        <div className={cx.ListItem__Divider}></div>    
      </li>
  );
}

listItem.propTypes = {
  itemData: PropTypes.object.isRequired  
}

export default listItem;