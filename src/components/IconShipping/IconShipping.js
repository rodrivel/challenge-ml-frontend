import React from 'react';
import iconFreeShipping from '../../assets/ic_shipping.png';
import iconFreeShipping2x from '../../assets/ic_shipping@2x.png.png';

const IconShipping = () => {
  return (
    <div>
      <img width={20} src={iconFreeShipping} srcSet={`${iconFreeShipping} 36w, ${iconFreeShipping2x} 18w`}/>
    </div>
  );
};

export default IconShipping;