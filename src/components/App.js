/* eslint-disable no-unused-vars */

import React from 'react';
import ReactDOM from 'react-dom';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

/* eslint-enable no-unused-vars */

const App = () => (
      <React.Fragment>
        <Display result ='Milestone 4 (logic implemented)'/>
        <ButtonPanel />
      </React.Fragment>
);

export default App;
