import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

const Title = ({ title, subtitle }) => ([
  <Row noGutters className="mb-2" key="title">
    <Col>
      <h2>{ title }</h2>
    </Col>
  </Row>,
  subtitle && (
  <Row noGutters key="subtitle">
    <Col>
      <h2>{ subtitle }</h2>
    </Col>
  </Row>
  ),
]);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

Title.defaultProps = {
  subtitle: null,
};

export default Title;
