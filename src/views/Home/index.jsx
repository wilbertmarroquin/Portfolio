import React from 'react';
import { Row, Container } from 'react-bootstrap';
import Title from '../../components/Title';
import LinkButton from '../../components/LinkButton';
import WorkList from '../WorkList';
import routesDictionary from '../../routes/routesDict';

const Home = () => {
  const helloText = 'Hello!';
  const contentText = 'I am an experienced design lover based in Australia. I’m available for freelance work and projects. I specialise in graphic design & art direction as well as photo, video & audio.';
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
