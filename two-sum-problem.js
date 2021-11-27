class TwoSumProblem {
  getFirstTwoSumNumber(numberTest, list) {
    for (var number = 1; number <= list.length; number++) {
      if (list[number - 1] + list[number] == numberTest) {
        return new Array(list[number - 1], list[number]);
      }
    }

    return [];
  }
}

module.exports = TwoSumProblem;
