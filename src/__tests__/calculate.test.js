import calculate from '../logic/calculate';

describe('calculator logic', () => {
  it('return 0 if name is equal to AC', () => {
    const res = calculate({ total: 25, next: 45, operation: '+' }, 'AC');
    expect(res).toHaveProperty('total');
    expect(res.total).toEqual(null);
  });

  it('make number negative when name is equal to +/-', () => {
    const res = calculate({ total: 25, next: null, operation: null }, '+/-');
    expect(res).toHaveProperty('total');
    expect(res.total).toEqual(-25);
  });

  it('do modulo with 100 when name is equal to %', () => {
    const res = calculate({ total: 25, next: null, operation: null }, '%');
    expect(res).toHaveProperty('total');
    expect(res.total).toEqual(0.25);
  });

  it('apply addition if operation is equal to +', () => {
    const res = calculate({ total: 25, next: 45, operation: '+' }, '=');
    expect(res).toHaveProperty('total');
    expect(res.total).toEqual('70');
  });

  it('apply subtraction if operation is equal to -', () => {
    const res = calculate({ total: 25, next: 45, operation: '-' }, '=');
    expect(res).toHaveProperty('total');
    expect(res.total).toEqual('-20');
  });

  it('apply multiplication if operation is equal to x', () => {
    const res = calculate({ total: 5, next: 5, operation: 'x' }, '=');
    expect(res).toHaveProperty('total');
    expect(res.total).toEqual('25');
  });

  it('apply divison if operation is equal to ÷', () => {
    const res = calculate({ total: 25, next: 5, operation: '÷' }, '=');
    expect(res).toHaveProperty('total');
    expect(res.total).toEqual('5');
  });

  it('return message error when second number is 0 while division', () => {
    const res = calculate({ total: 25, next: 0, operation: '÷' }, '=');
    expect(res).toHaveProperty('total');
    expect(res.total).toEqual('Zero divide Error');
  });

  it('apply decimal addition with adding 0. if result is less than 1', () => {
    const res = calculate({ total: 0.5, next: 0.4, operation: '+' }, '=');
    expect(res).toHaveProperty('total');
    expect(res.total).toEqual('0.9');
  });

  it('When a . is clicked, and total is not null, operation is null and next is null, it returns a total 12.', () => {
    const res = calculate({ total: '25', next: null, operation: null }, '.');
    expect(res).toHaveProperty('total');
    expect(res.total).toEqual('25.');
  });

  it('When a btn of 4 is clicked, and total and operation is not null, next is null, it returns a next = "4"', done => {
    const result = calculate({ total: 25, next: null, operation: 'x' }, '4');
    expect(result).toHaveProperty('next');
    expect(result.next).toEqual('4');
    done();
  });

  it('When a btn of 5 is clicked, and total, operation and next is not null, it returns a next = "45"', done => {
    const res = calculate({ total: 25, next: 4, operation: '+' }, '5');
    expect(res).toHaveProperty('next');
    expect(res.next).toEqual('45');
    done();
  });
});
