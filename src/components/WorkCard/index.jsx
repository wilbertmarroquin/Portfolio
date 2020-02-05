import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Fade } from 'react-bootstrap';
import WorkContent from './WorkContent';

import './styles.scss';

const WorkCard = (props) => {
  const { image, ...rest } = props;
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <Row
      noGutters
      className="work-card"
      key="imageContainer"
      onMouseEnter={() => {
        setShowOverlay(true);
      }}
      onMouseLeave={() => {
        setShowOverlay(false);
      }}
    >
      <img src={image} alt="work" className="image-wrapper" />
      <Fade in={showOverlay}>
        <div className="work-mask p-7">
          <WorkContent {...rest} />
        </div>
      </Fade>
    </Row>
  );
};

WorkCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default WorkCard;
