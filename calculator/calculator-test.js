
it('should calculate the monthly rate correctly', function () {
  // ...

    let amount = 1000000;
    let years = 30;
    let rate = 3.4;

  expect(calculateMonthlyPayment(amount, years, rate).toFixed(2)).toEqual('4434.81');
});


it("should return a result with 2 decimal places", function() {
  // ..

  let amount = 1500000;
  let years = 30;
  let rate = 3.4;

expect(calculateMonthlyPayment(amount, years, rate).toFixed(2)).toEqual('6652.22')
});

/// etc
