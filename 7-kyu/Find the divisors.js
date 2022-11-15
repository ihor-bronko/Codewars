// Find the divisors

function divisors(integer) {
	const newArr = []

	for (let i = 2; i < integer; i++) {
		if (integer % i === 0) {
			newArr.push(i)
		}
	}

	if (newArr.length === 0) {
		return `${integer} is prime`
	} else {
		return newArr
	}
}
