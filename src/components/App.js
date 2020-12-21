/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
/* eslint-enable no-unused-vars */

const App = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });
  const { total, next, operation } = state;

  const handleClick = (buttonName) => {
    setState(calculate({ total, next, operation }, buttonName));
  };

  return (
    <React.Fragment>
      <Display result={total} next ={next} />
      <ButtonPanel clickHandler = { handleClick } />
    </React.Fragment>
  );
};

export default App;
