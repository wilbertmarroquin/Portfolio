import React from 'react';
import PropTypes from 'prop-types';
import {
  Row, Col, Container,
} from 'react-bootstrap';
import Title from '../../components/Title';
import WorkCard from '../../components/WorkCard';
import LinkButton from '../../components/LinkButton';
import routesDictionary from '../../routes/routesDict';
import workList from '../../data';

const WorkList = (props) => {
  const { title, complete, className } = props;
  const lastWorks = workList.slice(0, 4);
  const renderList = complete ? workList : lastWorks;
  const seeWorkText = 'See all works';

  return (
    <Container className={className}>
      <Title title={title} />
      <Row>
        {
          renderList.map((workData, index) => (
            <Col xs={6}>
              <WorkCard id={index + 1} {...workData} />
            </Col>
          ))
        }
      </Row>
      {
        !complete
        && (
        <div className="text-right mt-2">
          <LinkButton text={seeWorkText} route={routesDictionary.work} />
        </div>
        )
      }
    </Container>
  );
};

WorkList.propTypes = {
  title: PropTypes.string,
  complete: PropTypes.bool,
  className: PropTypes.string,
};

WorkList.defaultProps = {
  title: 'Selected Works',
  complete: true,
  className: undefined,
};

export default WorkList;
