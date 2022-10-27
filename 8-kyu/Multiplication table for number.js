// Multiplication table for number

const multiTable = number => [...Array(10)].map((_,index) => `${index + 1} * ${number} = ${(index + 1) * number}` ).join('\n')



