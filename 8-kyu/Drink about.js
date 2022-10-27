// Drink about

function peopleWithAgeDrink(old) {
	return `drink ${old < 14 ? 'toddy' : old < 18 ? 'coke' : old < 21 ? 'beer' : 'whisky'}`
}



console.log(peopleWithAgeDrink(21));


console.log('arr ' + '- object')

console.log(4 + '5')


let incr = 10,
	decr = 10

// incr++
// decr--


console.log(++incr)
console.log(--decr)


console.log(5 % 2)

console.log(2 + 2 * 2 !== 8)


const isChecked = true,
	isClose = false

console.log(!isChecked || isClose)


console.log('Im ' + 'Suric')


function checked(en, ex) {
return en === ex ? console.log(' Я НЕ ПРАВ!') : 'Я SURIC'
}

checked()
