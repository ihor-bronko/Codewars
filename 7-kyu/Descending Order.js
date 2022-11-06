// Descending Order

const descendingOrder = n =>
	+String(n)
		.split('')
		.sort((a, b) => b - a)
		.join('')
