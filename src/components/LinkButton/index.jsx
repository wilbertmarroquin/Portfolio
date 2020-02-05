import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const LinkButton = ({ className, route, text }) => (
  <Link className={className} to={route}>
    <Button variant="link">
      { text }
    </Button>
  </Link>
);

LinkButton.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

LinkButton.defaultProps = {
  className: undefined,
};

export default LinkButton;
