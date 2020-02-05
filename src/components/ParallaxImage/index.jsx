import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';

import './styles.scss';

class ParallaxImage extends Component {
  constructor(props) {
    super(props);

    this.parallaxShift = this.parallaxShift.bind(this);

    this.state = {
      offset: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.parallaxShift);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.parallaxShift);
  }

  parallaxShift() {
    if (window.innerHeight / 2 >= window.pageYOffset / 2) {
      this.setState({
        offset: window.pageYOffset / 2,
      });
    }
  }


  render() {
    const { src, className } = this.props;
    const { offset } = this.state;

    return (
      <div className="parallax-content">
        <Image
          src={src}
          className={className}
          style={{ transform: `translate3d(0px, ${offset}px, 0px)` }}
        />
      </div>
    );
  }
}

ParallaxImage.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ParallaxImage.defaultProps = {
  className: undefined,
};

export default ParallaxImage;
