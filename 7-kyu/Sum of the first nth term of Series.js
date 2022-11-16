// Sum of the first nth term of Series
function SeriesSum(n) {
	let result = 0
	for (let i = 0; i < n; i++) {
		result += 1 / (1 + i * 3)
	}
	return result.toFixed(2)
}
