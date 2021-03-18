import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import axios from 'axios';
import cx from './ItemDetail.module.scss';
import Skeleton from 'react-loading-skeleton';
import { useErrorHandler } from 'react-error-boundary';

function SearchResult() {
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

  useEffect(()=>{
    console.log(itemData);
  }, [itemData])

  
  return (
    <div className={cx.SearchResult}>
      <Layout>          
          { categories 
            ? <div className={cx.BreadcrumbWrapper}><Breadcrumb categories={categories}/></div>
            : <Skeleton width={400} height={20} style={{marginBottom: '16px'}}/>
          }
      </Layout>
    </div>

  );
}

export default SearchResult;
