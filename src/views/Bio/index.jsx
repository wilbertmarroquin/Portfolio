import React from 'react';
import {
  Container, Image, Col, Row,
} from 'react-bootstrap';
import Presentation from '../../components/Presentation';
import MyBio from '../../components/MyBio';
import Photo from '../../media/Bio/photo.jpeg';
import './styles.scss';

const Bio = () => (
  <Container>
    <Row>
      <Col xs={5}>
        <Image src={Photo} className="photo" />
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
