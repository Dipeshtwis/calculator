import calculate from '../logic/calculate';

describe("calculator logic", () => {
  it("return 0 if name is equal to AC", () => {
  	const res = calculate({total: 25, next: 45, operation: '+'}, 'AC');
    expect(res).toHaveProperty('total');
    expect(res.total).toEqual(null);
  });

  it("make number negative when name is equal to +/-", () => {
  	const res = calculate({total: 25, next: null, operation: null}, '+/-');
    expect(res).toHaveProperty('total');
    expect(res.total).toEqual(-25);
  });

  it("do modulo with 100 when name is equal to %", () => {
  	const res = calculate({total: 25, next: null, operation: null}, '%');
    expect(res).toHaveProperty('total');
    expect(res.total).toEqual(0.25);
  });
});
