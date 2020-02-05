import React, { Component } from 'react';
import Layout from '../Layout';

const baseStates = {
  loading: () => null,
  component: (props) => (<Layout {...props} />),
};

class Base extends Component {
  constructor(props) {
    super(props);

    this.state = {
      render: 'loading',
    };
  }

  componentDidMount() {
    this.setState({
      render: 'component',
    });
  }

  render() {
    const { render } = this.state;

    return (baseStates[render]());
  }
}

export default Base;
