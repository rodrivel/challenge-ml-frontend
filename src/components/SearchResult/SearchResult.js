import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function SearchResult() {
  const { search } = useLocation();

  useEffect(()=>{
    const query = new URLSearchParams(search);
    const q = query.get('q');    
    if (q) {      
      // dispatch axios call
    }
  },[search]);

  return (
    <div>
      Search Result
    </div>
  );
}

export default SearchResult;