// Largest 5 digit number in a series
const solution = digits =>
	digits
		.split('')
		.reduce(
			(prev, _, index) => Math.max(prev, digits.slice(index, index + 5)),
			0
		)
