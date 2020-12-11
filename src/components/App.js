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
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (buttonName) => {
    const CalaculatorObjectState = this.state;
    const result = calculate(CalaculatorObjectState, buttonName);
    this.setState({
      total: result.total ? result.total : null,
      next: result.next ? result.next : null,
      operation: result.operation ? result.operation : null,
    });
  }

  render() {
    const { total, next } = this.state;
    return (
      <React.Fragment>
        <Display result = { total || next || '0' } />
        <ButtonPanel />
      </React.Fragment>
    );
  }
}

export default App;
