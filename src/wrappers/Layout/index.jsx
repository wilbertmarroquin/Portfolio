import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import Sider from '../../components/Sider';
import Routes from '../../routes';
import Footer from '../../components/Footer';

const Layout = () => (
  <Container fluid className="base-container">
    <Row noGutters className="base-container">
      <Col xs={0} xl={2}>
        <Sider />
      </Col>
      <Col xs={12} xl={10} className="pb-10">
        <Routes />
        <div className="px-4">
          <Footer />
        </div>
      </Col>
    </Row>
  </Container>
);

export default Layout;
