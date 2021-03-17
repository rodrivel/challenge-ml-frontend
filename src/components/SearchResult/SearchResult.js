import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ListItem from '../ListItem/ListItem';
import Layout from '../Layout/Layout';
import axios from 'axios';

function SearchResult() {
  const { search } = useLocation();
  const [items, setItems] = useState([]);  

  useEffect(()=>{
    const query = new URLSearchParams(search);
    const q = query.get('q');    
    if (q) {      
      axios.get(`/api/items?q=${q}`)
        .then((response) => {
          const fetchedItems = response.data.items;
          if (fetchedItems) {
            setItems(fetchedItems);            
          }
        })
        .catch((error) => {
          console.log('error', error);
        })
    }
  },[search]);  

  return (
    <Layout>
      { items.map((item) => <ListItem key={`item-${item.id}`} itemData={item} /> )}
    </Layout>

  );
}

export default SearchResult;
