import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const MyBio = () => {
  const myBioText = 'My bio';
  const subText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore ma.';
  const firstBioText = 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.';

  return (
    <Container>
      <Row>
        <Col xs={12} lg={4}>
          <h1>{myBioText}</h1>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <h4>{subText}</h4>
          <h5 className="mt-2">{firstBioText}</h5>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <h5>{firstBioText}</h5>
          <h5 className="mt-2">{firstBioText}</h5>
        </Col>
      </Row>
    </Container>
  );
};

export default MyBio;
