import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ListItem from '../ListItem/ListItem';
import Layout from '../Layout/Layout';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import axios from 'axios';
import cx from './SearchResult.module.scss';
import Skeleton from 'react-loading-skeleton';
import NoResults from './NoResults';
import { useErrorHandler } from 'react-error-boundary';
import { Helmet } from "react-helmet-async";


function SearchResult() {
  const { search } = useLocation();
  const [items, setItems] = useState([{},{},{},{}]);
  const [categories, setCategories] = useState(null);
  const handleError = useErrorHandler();
  const [searchString, setSearchString] = useState('');

  useEffect(()=>{
    const query = new URLSearchParams(search);
    const q = query.get('q');    
    if (q) {    
      setSearchString(q);  
      axios.get(`/api/items?q=${q}`)
        .then((response) => {
          const fetchedItems = response.data.items;
          const fetchedCategories = response.data.categories;          
          if (fetchedItems) {
            setItems(fetchedItems);
            setCategories(fetchedCategories);
          }          
        })
        .catch(handleError)
    }
  },[search]);

  
  return (
    <div className={cx.SearchResult}>
      <Helmet>
        <title>{`${searchString} | Mercado Libre`}</title>
        <meta name='description' content={`Encontrá ${searchString} en Mercadolibre.com.ar! Entrá y conocé nuestras increíbles ofertas y promociones. Descubrí la mejor forma de comprar online.`}></meta>
      </Helmet>
      <Layout>          
          { categories 
            ? <div className={cx.BreadcrumbWrapper}><Breadcrumb categories={categories}/></div>
            : <Skeleton width={400} height={20} style={{margin: '16px 0'}}/>
          }
          { items && items.length == 0 
            ? <div className={cx.NoResultsWrapper}><NoResults/></div>
            : <ul id='results'>
                { items.map((item) => <ListItem key={`item-${item.id || Math.random() }`} itemData={item} />) }
              </ul>
          }          
      </Layout>
    </div>

  );
}

export default SearchResult;
