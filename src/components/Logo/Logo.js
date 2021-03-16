import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/Logo_ML@2x.png.png';

const Logo = (props) => {
  return (
    <img width={props.width} src={logo} alt="Logo Mercadolibre"/>
  );
};

Logo.propTypes = {
  width: PropTypes.number
};

export default Logo;