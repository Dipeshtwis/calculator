/* eslint-disable no-unused-vars */

import React from 'react';
import ReactDOM from 'react-dom';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

/* eslint-enable no-unused-vars */

class App extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  	  total = null;
  	  next = null;
  	  operation = null;
    }
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <Display result ='Milestone 5'/>
        <ButtonPanel />
      </React.Fragment>
    );
  }
} 

export default App;
