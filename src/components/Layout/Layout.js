import React from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Row } from 'react-grid-system';
import cx from './Layout.module.scss';

function Layout(props) {
  return (
    <>
      <Container className={cx.Layout__Container}>
        <Row className={cx.Layout__Container__Row}>
          <Col sm={10} className={cx.Layout__Container__Row__Col}>
            { props.children }
          </Col>
        </Row>
      </Container>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

export default Layout;