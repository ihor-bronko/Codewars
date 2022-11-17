// Find the stray number

const stray = numbers =>
	numbers.find(
		number => numbers.indexOf(number) === numbers.lastIndexOf(number)
	)

console.log(stray([1, 1, 2]))
