import React from 'react';
import { Container, Row } from 'react-bootstrap';
import FooterColumn from './FooterColumn';
import LinkButton from '../LinkButton';
import routesDictionary from '../../routes/routesDict';

import './styles.scss';

const Footer = () => (
  <Container className="footer-container">
    <Row>
      <FooterColumn title="Hello!">
        <p>
        Level 13, 2 Elizabeth St,
        Melbourne, Victoria 3000
        Australia
        </p>
        <p>
          +61 (0) 7 9180 3458
        </p>
        <p>
          noreply@envato.com
        </p>
      </FooterColumn>
      <FooterColumn title="Clients">
        <p>
          Dekoding
        </p>
        <p>
          Fincite
        </p>
      </FooterColumn>
      <FooterColumn title="Want to hire me?">
        <p>
          Maecenas ut neque et ante convallis laoreet non ac eros.
          Mauris a sem vel quam volutpat commodo sodales sit amet nisi. Donec eget urna.
        </p>
        <LinkButton text="Contact me" route={routesDictionary.contact} />
      </FooterColumn>
    </Row>
  </Container>
);

export default Footer;
