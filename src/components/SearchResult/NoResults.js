import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as NoResultsSVG } from '../../assets/stateLessSearch.svg';
import cx from './NoResults.module.scss';

function NoResults(props) {
  return (
    <div className={cx.NoResults}>
      <div>
        <NoResultsSVG/>
      </div>
      <div className={cx.NoResults__Message}>
        { props.message || 'No se encontraron resultados para la búsqueda ingresada' }
      </div>
    </div>
  );
}

NoResults.propTypes = {
  message: PropTypes.string
}

export default NoResults;