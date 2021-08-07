import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Title from '../../components/Title';
import ContactForm from './ContactForm';

const Contact = () => {
  const contactMeText = 'Contact me';
  const sayHelloText = 'Say hello!';

  return (
    <Container>
      <Title title={contactMeText} />
      <Row className="mt-10">
        <Col xs={24} md={3}>
          <h2>{sayHelloText}</h2>
        </Col>
        <Col xs={24} md={9}>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
