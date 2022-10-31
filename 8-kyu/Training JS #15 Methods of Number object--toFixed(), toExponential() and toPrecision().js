// Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()

const howManySmaller = (arr, n) => arr.filter(x => x.toFixed(2) < n).length
