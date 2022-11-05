// Square Every Digit

const squareDigits = num =>
	+String(num)
		.split('')
		.map(e => (+e) ** 2)
		.join('')
