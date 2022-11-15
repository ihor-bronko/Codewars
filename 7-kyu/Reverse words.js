// Reverse words
const reverseWords = str =>
	str
		.split(' ')
		.map(element => [...element].reverse().join(''))
		.join(' ')
