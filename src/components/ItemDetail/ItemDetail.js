import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import axios from 'axios';
import cx from './ItemDetail.module.scss';
import Skeleton from 'react-loading-skeleton';
import { useErrorHandler } from 'react-error-boundary';
import { currencyFormat } from '../../helpers';

function ItemDetail() {
  const params = useParams();
  const [itemData, setItemData] = useState(null);
  const [categories, setCategories] = useState(null);
  const handleError = useErrorHandler();
  
  useEffect(()=>{        
    const id = params['id'];
    if (id) {
      axios.get(`/api/items/${id}`)
        .then((response) => {          
          const fetchedItemData = response.data.item;       
          const fetchedCategories = response.data.categories;
          if (fetchedItemData) {
            setItemData(fetchedItemData);
            setCategories(fetchedCategories);
          }
        })
        .catch(handleError)
    }
  },[params]);
  
  return (
    <div className={cx.ItemDetail}>
      <Layout>          
          { categories 
            ? <div className={cx.BreadcrumbWrapper}><Breadcrumb categories={categories}/></div>
            : <Skeleton width={400} height={20} style={{marginBottom: '16px'}}/>
          }
          <div className={cx.ItemDetail__Wrapper}>
            <div className={cx.ItemDetail__ContentWrapper}>
              <div className={cx.ItemDetail__ImageWrapper}>
                { itemData && itemData.pictures 
                  ? <img src={itemData.pictures[0].secure_url} alt={`Imagen ${itemData.title}`}/>
                  : <Skeleton width={680} height={500}/>
                }
              </div>
              <div className={cx.ItemDetail__DescriptionWrapper}>
                <div className={cx.ItemDetail__DescriptionTitle}>
                  Descripción del Producto
                </div>
                <div className={cx.ItemDetail__Description}>{ itemData && itemData.description || <Skeleton count={3}/> }</div>
              </div>
            </div>
        
            <div className={cx.ItemDetail__CTAWrapper}>
              <div className={cx.ItemDetail__CTAWrapper__ExtraInfo}>
                { itemData && (itemData.sold_quantity || itemData.condition)
                  ? <>
                      <span>
                        { itemData && itemData.condition }
                        { itemData && itemData.sold_quantity > 0 ? ` - ${itemData.sold_quantity} vendido${itemData.sold_quantity === 1 ? '' : 's' }` : null }
                      </span>                      
                    </>                                      
                  : <Skeleton/>
                }
              </div>
              <div className={cx.ItemDetail__CTAWrapper__Title}>
                { itemData && itemData.title 
                  ? itemData.title
                  : <Skeleton/>
                }
              </div>
              <div className={cx.ItemDetail__CTAWrapper__Price}>
                { itemData && itemData.price
                  ? 
                    <>
                      <span>{itemData.price && itemData.price.currency === 'ARS' ? '$ ' : itemData.price.currency }{currencyFormat(itemData.price.amount)}</span>
                      { itemData.price.decimals > 0 ? <span className={cx.ItemDetail__CTAWrapper__Price__Decimals }>{ itemData.price.decimals }</span> : null }
                    </>
                  : <Skeleton/>
                }
              </div>
              <div className={cx.ItemDetail__CTAWrapper__CTA}>
                <button>Comprar</button>
              </div>
            </div>                
          </div> 
      </Layout>
    </div>
  );
}

export default ItemDetail;
