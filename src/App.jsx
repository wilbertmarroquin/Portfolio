import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Base from './wrappers/Base';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/base.scss';
import './styles/overwrite.scss';
import './styles/utils.scss';


const App = () => (
  <Router>
    <Base />
  </Router>
);

export default App;
