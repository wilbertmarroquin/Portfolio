import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import {
  Nav, Collapse, Button, Col, Row, Container,
} from 'react-bootstrap';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import menuItems from './constants';
import avatar from '../../media/avatar.jpg';

import './styles.scss';

const Sider = ({ history }) => {
  const [open, setOpen] = useState(false);
  const { location } = history;
  const { pathname } = location;
  const path = pathname.split('/');
  const menu = menuItems.map((item) => (
    <Nav.Item
      className={path[1] === item.key ? 'selected' : undefined}
      key={item.key}
    >
      <Link to={item.redirection}>{item.title}</Link>
    </Nav.Item>
  ));

  return (
    <Nav className="flex-column sider">
      <Container fluid>
        <Row>
          <Col xs={6} xl={12} className="sider-icon">
            <img
              src={avatar}
              alt="avatar"
              className="avatar"
            />
          </Col>
          <Col xs={6} className="sider-collapse sider-menu">
            <Button
              onClick={() => {
                setOpen(!open);
              }}
            >
              <FontAwesomeIcon icon={faBars} size="lg" />
            </Button>
          </Col>
        </Row>
        <Collapse className="sider-collapse" in={open}>
          <div>
            {menu}
          </div>
        </Collapse>
        <div className="sider-normal">
          {menu}
        </div>
      </Container>
    </Nav>
  );
};

Sider.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(Sider);
