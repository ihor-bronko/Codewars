// Factorial
function factorial(n) {
	if (n > 12 || n < 0) {
		throw error
	} else if (n < 1) {
		return 1
	} else {
		return n * factorial(--n)
	}
}
