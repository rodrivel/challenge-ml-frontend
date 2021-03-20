import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/Logo_ML.png';
import logo2x from '../../assets/Logo_ML@2x.png.png';
import { Link } from 'react-router-dom';
import cx from './Logo.module.scss';

const Logo = (props) => {
  return (
    <Link to="/" className={cx.Logo__Link} id='logo-link'>
      <img width={props.width || 106} src={logo} srcSet={`${logo} 53w, ${logo2x} 106w`} alt="Logo Mercadolibre"/>
    </Link>
  );
};

Logo.propTypes = {
  width: PropTypes.number
};

export default Logo;