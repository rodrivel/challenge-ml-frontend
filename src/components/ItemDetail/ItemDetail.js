import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useScreenClass } from 'react-grid-system';
import { useErrorHandler } from 'react-error-boundary';
import Skeleton from 'react-loading-skeleton';
import axios from 'axios';
import Layout from '../Layout/Layout';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import currencyFormat from '../../helpers/currencyFormat';
import cx from './ItemDetail.module.scss';

export const getItemFromAPI = (id) => axios.get(`/api/items/${id}`)
  .then((response) => response.data.item || {});

export const imageSkeletonHeight = (sClass) => {
  const mapHeight = {
    xs: '400px',
    sm: '500px',
    md: '500px',
    lg: '600px',
    xl: '680px',
    xxl: '680px',
  };
  return mapHeight[sClass] || '200px';
};

function ItemDetail() {
  const params = useParams({});
  const [itemData, setItemData] = useState(null);
  const handleError = useErrorHandler();
  const screenClass = useScreenClass();

  const renderDescription = (data) => {
    let desc;
    if (!data) {
      desc = <Skeleton count={3} />;
    } else if (data.description === '') {
      desc = 'Anuncio sin descripción';
    } else {
      desc = data.description;
    }
    return desc;
  };

  useEffect(() => {
    const { id } = params;
    if (id) {
      getItemFromAPI(id)
        .then((fetchedItemData) => {
          setItemData(fetchedItemData);
        })
        .catch(handleError);
    }
  }, [params]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className={cx.ItemDetail}>
      { itemData && itemData.title
        ? (
          <Helmet>
            <title>
              {`${itemData.title} | Mercado Libre`}
            </title>
            <meta name="description" content={`Compralo en Mercado Libre a ${itemData.price && itemData.price.currency === 'ARS' ? '$ ' : itemData.price.currency}${currencyFormat(itemData.price.amount)}. ${itemData.categories ? `Encontrá más productos de ${itemData.categories.join(', ')}` : ''}`} />
          </Helmet>
        )
        : null}
      <Layout>
        { itemData && itemData.categories
          ? (
            <div className={cx.BreadcrumbWrapper}>
              <Breadcrumb categories={itemData && itemData.categories} />
            </div>
          )
          : <Skeleton width={280} height={20} style={{ margin: '16px 0' }} />}
        <div className={cx.ItemDetail__Wrapper}>
          <div className={cx.ItemDetail__ContentWrapper}>
            <div className={cx.ItemDetail__ImageWrapper}>
              { itemData && itemData.pictures
                ? <img src={itemData.pictures[0].secure_url} alt={`Imagen ${itemData.title}`} />
                : <Skeleton width={680} style={{ height: imageSkeletonHeight(screenClass) }} />}
            </div>
            <div className={cx.ItemDetail__CTAWrapper}>
              <div className={cx.ItemDetail__CTAWrapper__ExtraInfo}>
                { itemData && (itemData.sold_quantity || itemData.condition)
                  ? (
                    <>
                      <span>
                        { itemData && itemData.condition }
                        { itemData && itemData.sold_quantity > 0 ? ` - ${itemData.sold_quantity} vendido${itemData.sold_quantity === 1 ? '' : 's'}` : null }
                      </span>
                    </>
                  )
                  : <Skeleton /> }
              </div>
              <h1 className={cx.ItemDetail__CTAWrapper__Title}>
                { itemData && itemData.title
                  ? itemData.title
                  : <Skeleton count={2} /> }
              </h1>
              <div className={cx.ItemDetail__CTAWrapper__Price}>
                { itemData && itemData.price
                  ? (
                    <>
                      <span>
                        {itemData.price && itemData.price.currency === 'ARS' ? '$ ' : itemData.price.currency }
                        {currencyFormat(itemData.price.amount)}
                      </span>
                      { itemData.price.decimals > 0
                        ? (
                          <span className={cx.ItemDetail__CTAWrapper__Price__Decimals}>
                            { itemData.price.decimals }
                          </span>
                        )
                        : null }
                    </>
                  )
                  : <Skeleton />}
              </div>
              <div className={cx.ItemDetail__CTAWrapper__CTA}>
                <button type="button">Comprar</button>
              </div>
            </div>
            <div className={cx.ItemDetail__DescriptionWrapper}>
              <div className={cx.ItemDetail__DescriptionTitle}>
                Descripción del Producto
              </div>
              <div className={cx.ItemDetail__Description}>
                { renderDescription(itemData) }
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default ItemDetail;
