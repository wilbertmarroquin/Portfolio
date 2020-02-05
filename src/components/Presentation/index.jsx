import React from 'react';
import { Row, Container } from 'react-bootstrap';


const Presentation = () => {
  const presentationText = 'Im Wilbert';
  const contentText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore ma.';
  const subContentText = 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.';

  return (
    <Container>
      <Row>
        <h1>{ presentationText }</h1>
      </Row>
      <Row className="mt-4">
        <h4>{ contentText }</h4>
      </Row>
      <Row className="mt-4">
        <h5>{ subContentText }</h5>
      </Row>
    </Container>
  );
};

export default Presentation;
