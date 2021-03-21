import React from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Row } from 'react-grid-system';
import cx from './Layout.module.scss';

const layout = (props) => (
  <>
    <Container className={cx.Layout__Container}>
      <Row className={cx.Layout__Container__Row}>
        <Col xs={12} xxl={10} offset={{ xxl: 1 }}>
          { props.children }
        </Col>
      </Row>
    </Container>
  </>
);

layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default layout;
