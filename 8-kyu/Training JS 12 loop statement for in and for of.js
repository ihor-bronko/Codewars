// Training JS #12: loop statement --for..in and for..of

const giveMeFive = obj => /*for(in)*/[].concat(...Object.entries(obj)).filter(element => element.length === 5)

