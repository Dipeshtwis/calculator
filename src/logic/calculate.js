import Operate from './operate';

const calculate = (CalaculatorObject, name) => {
  let { total, next, operation } = CalaculatorObject;
  const operands = ['+', '-', 'x', '÷', '%'];
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
  if (name === 'AC') {
    total = null;
    next = null;
    operation = null;
  } else if (name === '+/-') {
    (total *= -1).toString();
    if (next) (next *= -1).toString();
  } else if (name === '%') {
    (total /= 100).toString();
    operation = null;
  }

  if (digits.includes(name) && operation === null) {
    total = total === null ? name : total + name;
  } else if (digits.includes(name) && operation !== null) {
    next = next === null ? name : next + name;
  } else if (
    operands.includes(name)
    && (total !== null || total !== undefined)
  ) {
    operation = name;
  } else if (name === '=' && total !== null && next !== null) {
    if (operands.includes(operation)) {
      total = Operate(total, next, operation);
    }
    operation = null;
    next = null;
  }

  return { total, next, operation };
};

export default calculate;