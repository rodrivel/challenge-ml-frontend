import React from 'react';
import iconSearch from '../../assets/ic_Search.png';
import iconSearch2x from '../../assets/ic_Search@2x.png.png';

const IconSearch = () => <img width={18} src={iconSearch2x} srcSet={`${iconSearch}18w, ${iconSearch2x} 36w`} alt="Icon buscar"/>;

export default IconSearch;