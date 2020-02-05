import React from 'react';
import {
  Container, Image, Col, Row,
} from 'react-bootstrap';
import Presentation from '../../components/Presentation';
import MyBio from '../../components/MyBio';

const Bio = () => (
  <Container>
    <Row>
      <Col>
        <Image src="https://themes.muffingroup.com/be/freelancer/wp-content/uploads/2016/03/home_freelancer_bio1.png" />
      </Col>
      <Col className="pt-8">
        <Presentation />
      </Col>
    </Row>
    <Row className="my-14">
      <MyBio />
    </Row>
  </Container>
);

export default Bio;
