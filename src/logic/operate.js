import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let res;
  const num1 = new Big(numberOne);
  const num2 = new Big(numberTwo);
  if (operation === '-') {
    res = num1.minus(num2);
  } else if (operation === '+') {
    res = num1.plus(num2);
  } else if (operation === 'X') {
    res = num1.times(num2);
  } else if (operation === '÷') {
    if (numberTwo === 0) {
      res = 'Zero divide Error';
    } else {
      res = num1.div(num2);
    }
  } else if (operation === '%') {
    res = num1.div(100);
  }
  return res.toString();
};

export default operate;