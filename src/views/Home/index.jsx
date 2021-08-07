import React from 'react';
import { Row, Container } from 'react-bootstrap';
import Title from '../../components/Title';
import LinkButton from '../../components/LinkButton';
import WorkList from '../WorkList';
import routesDictionary from '../../routes/routesDict';

const Home = () => {
  const helloText = 'Hello i am Wilbert!';
  const contentText = 'Logical and results-driven Frontend Developer dedicated to building and optimizing user-focused websites for customers, familiar with wide range of programming utilities and languages.';
  const contactText = 'Contact me';

  return (
    <Container>
      <Row noGutters>
        <Title title={helloText} subtitle={contentText} />
        <LinkButton className="mt-2" route={routesDictionary.contact} text={contactText} />
        <WorkList className="mt-12" complete={false} />
      </Row>
    </Container>
  );
};

export default Home;
