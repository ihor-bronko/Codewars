// Arguments to Binary addition

const arr2bin = arr => arr.reduce((prev,curr) => prev + (typeof curr === 'number' ? curr : 0), 0).toString(2)
