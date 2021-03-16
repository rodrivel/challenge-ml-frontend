import React from 'react';
// import PropTypes from 'prop-types';
import cx from './AppBar.module.scss';
import { Container, Col, Row } from 'react-grid-system';
import SearchBar from '../SearchBar/SearchBar';
import Logo from '../Logo/Logo';


const appBar = () => {
  return (
    <div className={cx.AppBar}>
      <Container className={cx.AppBar__Container}>
        <Row>
          <Col sm={10} className={cx.AppBar__Container__ContentWrapper}>
            <Logo width={53}/>
            <SearchBar fullWidth={true} className={cx.AppBar__Container__ContentWrapper__SearchBar}/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

// appBar.propTypes = {
//   children: PropTypes.object
// };

export default appBar;