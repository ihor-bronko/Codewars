// How old will I be in 2099

const calculateAge = (b, q) => 'You ' + (b === q ? 'were born this very year!' : b > q ? `will be born in ${b - q} year${b - q !== 1 ? 's' : ''}.` : `are ${q - b} year${q - b !== 1 ? 's' : ''} old.`)





console.log(calculateAge(2012, 2016));
console.log(calculateAge(1989, 2016));
console.log(calculateAge(2000, 2090));
console.log(calculateAge(2000, 1990));
console.log(calculateAge(3400, 3400));
console.log(calculateAge(900, 2900));
console.log(calculateAge(2010, 1990));
console.log(calculateAge(2010, 1500));
console.log(calculateAge(2011, 2012));
console.log(calculateAge(2000, 1999));