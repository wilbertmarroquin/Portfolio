import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import {
  Container, Row, Image, Col,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faCode } from '@fortawesome/free-solid-svg-icons';
import workList from '../../data';
import routesDictionary from '../../routes/routesDict';


import './styles.scss';
import ParallaxImage from '../../components/ParallaxImage';


const WorkSimple = () => {
  const { id } = useParams();
  const data = workList[id - 1];
  const viewSiteText = 'View web site';
  const viewCodeText = 'View code';

  if (!data) return (<Redirect to={routesDictionary.notFound} />);

  return (
    <Container className="work-simple" fluid>
      <Row>
        <ParallaxImage src={data.image} className="work-principal-image" />
      </Row>
      <Row className="px-6 py-12 background-aquamarine">
        <Col>
          <h4>{data.title}</h4>
          <p>{data.explanationFirst}</p>
        </Col>
        <Col>
          <p>{data.explanationSecond}</p>
        </Col>
      </Row>
      <Row>
        <Image src={data.secondImage} className="second-work-image" />
      </Row>
      <Row>
        <Col className="view site">
          <a
            href={data.pageLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>
              <FontAwesomeIcon icon={faGlobe} size="lg" />
              {' '}
              {viewSiteText}
            </h3>
          </a>
        </Col>
        <Col className="view code">
          <a
            href={data.codeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>
              <FontAwesomeIcon icon={faCode} size="lg" />
              {' '}
              {viewCodeText}
            </h3>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default WorkSimple;
