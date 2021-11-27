const TwoSumProblem = require("./two-sum-problem");

describe("Two sum problema", () => {
  test("deve retorna numero positivo com lista preenchida", () => {
    var twoSumProblem = new TwoSumProblem();
    var twoNumbers = twoSumProblem.getFirstTwoSumNumber(5, [1, 2, 3, 4, 5]);
    expect(twoNumbers).toEqual([2, 3]);
  });

  test("Deve retornar uma exceção caso o lista vazia", () => {
    var twoSumProblem = new TwoSumProblem();
    var twoNumbers = twoSumProblem.getFirstTwoSumNumber(5, []);
    expect(twoNumbers).toEqual([]);
  });

  test("deve retorna numero negativo com lista preenchida", () => {
    var twoSumProblem = new TwoSumProblem();
    var twoNumbers = twoSumProblem.getFirstTwoSumNumber(
      -5,
      [-1, -2, -3, -4, -5]
    );

    expect(twoNumbers).toEqual([-2, -3]);
  });
});
