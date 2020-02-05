import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faLink } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';
import routesDictionary from '../../../routes/routesDict';

const WorkContent = (props) => {
  const { title, description, id } = props;

  return (
    <Container>
      <Row className="card-title">
        <Link to={`${routesDictionary.work}/${id}`}>{ title }</Link>
      </Row>
      <Row>
        {description}
      </Row>
      <Link className="card-search" to={`${routesDictionary.work}/${id}`}>
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </Link>
      <Link className="card-link" to={`${routesDictionary.work}/${id}`}>
        <FontAwesomeIcon icon={faLink} size="lg" />
      </Link>
    </Container>
  );
};

WorkContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default WorkContent;
