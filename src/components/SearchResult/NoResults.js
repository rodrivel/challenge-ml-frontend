import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as NoResultsSVG } from '../../assets/stateLessSearch.svg';
import cx from './NoResults.module.scss';

const noResults = ({ message = '' }) => (
  <div className={cx.NoResults}>
    <div>
      <NoResultsSVG />
    </div>
    <div className={cx.NoResults__Message}>
      { message || 'No se encontraron resultados para la búsqueda ingresada' }
    </div>
  </div>
);

noResults.defaultProps = {
  message: '',
};

noResults.propTypes = {
  message: PropTypes.string,
};

export default noResults;
