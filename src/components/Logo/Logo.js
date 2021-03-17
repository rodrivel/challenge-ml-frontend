import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/Logo_ML@2x.png.png';
import { Link } from 'react-router-dom';

const Logo = (props) => {
  return (
    <Link to="/">
      <img width={props.width} src={logo} alt="Logo Mercadolibre"/>
    </Link>
  );
};

Logo.propTypes = {
  width: PropTypes.number
};

export default Logo;