import React from 'react';
import iconFreeShipping from '../../assets/ic_shipping.png';
import iconFreeShipping2x from '../../assets/ic_shipping@2x.png.png';

const IconShipping = () => <img width={20} srcSet={`${iconFreeShipping} 18w, ${iconFreeShipping2x} 36w`} src={iconFreeShipping2x} alt="Ícono envío" />;

export default IconShipping;
