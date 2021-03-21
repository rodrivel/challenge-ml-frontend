import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo1x from '../../assets/Logo_ML.png';
import logo2x from '../../assets/Logo_ML@2x.png.png';
import cx from './Logo.module.scss';

const logo = (props) => (
  <Link to="/" className={cx.Logo__Link} id="logo-link">
    <img width={props.width || 106} src={logo1x} srcSet={`${logo1x} 53w, ${logo2x} 106w`} alt="Logo Mercadolibre" />
  </Link>
);

logo.propTypes = {
  width: PropTypes.number,
};

export default logo;
