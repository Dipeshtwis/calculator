import calculate from '../logic/calculate';

describe("calculator logic", () => {
  it("return 0 if name is equal to AC", () => {
  	const res = calculate({total: 25, next: 45, operation: '+'}, 'AC');
    expect(res).toHaveProperty('total');
    expect(res.total).toEqual(null);
  });
});
