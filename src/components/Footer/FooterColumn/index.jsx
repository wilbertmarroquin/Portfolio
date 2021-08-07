import React from 'react';
import { Col } from 'react-bootstrap';

import './styles.scss';

const FooterColumn = ({ title, children }) => (
  <Col xs={24} lg={4}>
    <p className="footer-column-title">{title}</p>
    <div>
      { children }
    </div>
  </Col>
);

export default FooterColumn;
