import React from 'react';
import { Container, Row } from 'react-bootstrap';
import FooterColumn from './FooterColumn';
import LinkButton from '../LinkButton';
import routesDictionary from '../../routes/routesDict';

import './styles.scss';

const Footer = () => (
  <Container className="footer-container">
    <Row>
      <FooterColumn title="Contact Info">
        <p>
          +51 972892866
        </p>
        <p>
          wilbertmarroquin1996@gmail.com
        </p>
      </FooterColumn>
      <FooterColumn title="Clients">
        <p>
          <a href="https://www.dekoding.pe/" target="_blank" rel="noopener noreferrer">
          Dekoding
          </a>
        </p>
        <p>
          <a href="https://www.fincite.de/de/" target="_blank" rel="noopener noreferrer">
          Fincite
          </a>
        </p>
      </FooterColumn>
      <FooterColumn title="Want to hire me?">
        <p>
          Do not hesitate to contact me
        </p>
        <LinkButton text="Contact me" route={routesDictionary.contact} />
      </FooterColumn>
    </Row>
  </Container>
);

export default Footer;
