// Square(n) Sum

const squareSum = numbers => numbers.map(x => x * x).reduce((prev, curr) => prev + curr, 0)

