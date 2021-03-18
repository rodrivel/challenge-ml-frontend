import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ListItem from '../ListItem/ListItem';
import Layout from '../Layout/Layout';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import axios from 'axios';
import cx from './SearchResult.module.scss';
import Skeleton from 'react-loading-skeleton';
import NoResults from './NoResults';

function SearchResult() {
  const { search } = useLocation();
  const [items, setItems] = useState([{},{},{},{}]);
  const [categories, setCategories] = useState(null);

  useEffect(()=>{
    const query = new URLSearchParams(search);
    const q = query.get('q');    
    if (q) {      
      axios.get(`/api/items?q=${q}`)
        .then((response) => {
          const fetchedItems = response.data.items;
          const fetchedCategories = response.data.categories;
          console.log(response.data);
          if (fetchedItems) {
            setItems(fetchedItems);
            setCategories(fetchedCategories);
          }
        })
        .catch((error) => {
          console.log('error', error);
        })
    }
  },[search]);

  
  return (
    <div className={cx.SearchResult}>
      <Layout>          
          { categories 
            ? <div className={cx.BreadcrumbWrapper}><Breadcrumb categories={categories}/></div>
            : <Skeleton width={400} height={20} style={{marginBottom: '16px'}}/>
          }
          { items && items.length == 0 
            ? <div className={cx.NoResultsWrapper}><NoResults/></div>
            : items.map((item) => <ListItem key={`item-${item.id || Math.random() }`} itemData={item} />)
          }          
      </Layout>
    </div>

  );
}

export default SearchResult;
