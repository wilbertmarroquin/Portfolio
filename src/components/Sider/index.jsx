import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import menuItems from './constants';

import './styles.scss';

const Sider = () => (
  <Nav defaultActiveKey="/" className="flex-column sider">
    <div>
      <img
        height={100}
        width={78}
        className="mb-7"
        src="https://themes.muffingroup.com/be/freelancer/wp-content/uploads/2016/03/retina-freelancer.png"
        alt="logo-test"
      />
    </div>
    {
      menuItems.map((item) => (
        <Nav.Item key={item.key}>
          <Link to={item.redirection}>{item.title}</Link>
        </Nav.Item>
      ))
    }
  </Nav>
);

export default Sider;
