// You're a square!

const isSquare = n => {
	if (n < 0) return false
	for (let i = 0; i <= n; i++) {
		if (i ** 2 === n) return true
		else continue
	}
	return false
}
