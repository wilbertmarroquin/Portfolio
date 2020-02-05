import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Title from '../../components/Title';
import ContactForm from './ContactForm';

const Contact = () => {
  const contactMeText = 'Contact me';
  const contactMeSubText = 'Pellentesque habitant morbi tristique senectus netus et malesuada';
  const sayHelloText = 'Say hello!';

  return (
    <Container>
      <Title title={contactMeText} subtitle={contactMeSubText} />
      <Row className="mt-10">
        <Col xs={3}>
          <h1>{sayHelloText}</h1>
        </Col>
        <Col xs={9}>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
