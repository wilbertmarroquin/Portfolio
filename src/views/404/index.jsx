import React from 'react';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Container, Col } from 'react-bootstrap';

import './styles.scss';

const NotView = () => {
  const errorTitle = 'Ooops... Error 404';
  const errorSubtitle = 'We are sorry, but the page you are looking for does not exist.';

  return (
    <Container className="not-found-container">
      <Row>
        <Col xs={3}>
          <FontAwesomeIcon className="alert-icon" icon={faExclamationCircle} size="lg" />
        </Col>
        <Col xs={9}>
          <h2>{errorTitle}</h2>
          <h4>{errorSubtitle}</h4>
        </Col>
      </Row>
    </Container>
  );
};

export default NotView;
