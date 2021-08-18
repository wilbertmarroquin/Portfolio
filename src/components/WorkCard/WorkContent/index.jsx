import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import routesDictionary from '../../../routes/routesDict';

import './styles.scss';

const WorkContent = (props) => {
  const {
    title, description, id,
  } = props;
  const history = useHistory();

  return (
    <Container onClick={() => { history.push(`${routesDictionary.work}/${id}`); }}>
      <Row className="card-title">
        <Link to={`${routesDictionary.work}/${id}`}>{ title }</Link>
      </Row>
      <Row>
        {description}
      </Row>
    </Container>
  );
};

WorkContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default WorkContent;
