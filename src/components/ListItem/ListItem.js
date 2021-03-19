import React from 'react';
import PropTypes from 'prop-types';
import cx from './ListItem.module.scss';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import iconFreeShipping from '../../assets/ic_shipping@2x.png.png';
import { currencyFormat } from '../../helpers';


function ListItem(props) {
  const { itemData } = props;
  const { price } = itemData;
  return (
      <div className={cx.ListItem}>
        <div className={cx.ListItem__Wrapper}>
          <div className={cx.ListItem__ImgWrapper}>
            <Link to={`/items/${itemData.id}`} className={cx.ListItem__Link}>
              { itemData.picture 
                ? <img src={itemData.picture} alt={`Imagen ${itemData.title}`}/>
                : <Skeleton style={{ height: '180px'}}/>
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
                        { itemData.free_shipping && <span><img width={20} src={iconFreeShipping}/></span> }
                      </div>
                    </div>
                  )
                  : <Skeleton height={30} width={150} style={{ marginBottom: '20px'}}/>
                }
              
              { itemData.title 
                ? <div className={cx.ListItem__MainInfo__Title}>{itemData.title}</div>
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
      </div>
  );
}

ListItem.propTypes = {
  itemData: PropTypes.object.isRequired  
}

export default ListItem;