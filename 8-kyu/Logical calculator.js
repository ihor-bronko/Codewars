// Logical calculator

const logicalCalc = (array, op) => !!array.reduce((prev, curr) => op === 'AND' ? prev && curr : op === 'OR' ? prev || curr : prev ^ curr)





