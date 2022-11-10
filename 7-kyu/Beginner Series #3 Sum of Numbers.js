// Beginner Series #3 Sum of Numbers
function getSum(a, b) {
	let min = Math.min(a, b),
		max = Math.max(a, b)
	return ((max - min + 1) * (max + min)) / 2
}

console.log(getSum(0, -1))
console.log(getSum(0, 1))
