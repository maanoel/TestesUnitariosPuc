const TwoSumProblem = require("./two-sum-problem");

describe("Two sum problema", () => {
  var twoSumProblem = new TwoSumProblem();

  test("deve retorna numero positivo com lista preenchida com numeros contidos", () => {
    var twoNumbers = twoSumProblem.getFirstTwoSumNumber(5, [1, 2, 3, 4, 5]);
    expect(twoNumbers).toEqual([2, 3]);
  });

  test("Deve retornar retornar lista vazia caso a  lista passada seja  vazia", () => {
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

  test("deve retorna lista vazia quando a lista não conseguir somar", () => {
    var twoSumProblem = new TwoSumProblem();
    var twoNumbers = twoSumProblem.getFirstTwoSumNumber(10, [1, 2, 3, 4, 5]);

    expect(twoNumbers).toEqual([]);
  });
});
