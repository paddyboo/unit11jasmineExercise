
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 750000, years: 30, rate: 7.5};
  expect(calculateMonthlyPayment(values)).toEqual('5244.11');
});

it("should return a result with 2 decimal places", function() {
  const values = {amount: 750000, years: 30, rate: 7.5};
  expect(calculateMonthlyPayment(values)).toBeCloseTo('5244.11',2);
  // ..
});

it("should return a Nan result with 0 interest rate", function() {
  const values = {amount: 750000, years: 30, rate: 0};
  expect(calculateMonthlyPayment(values)).toEqual('NaN');
  // ..
});

/// etc
