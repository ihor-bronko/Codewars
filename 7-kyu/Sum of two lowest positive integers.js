// Sum of two lowest positive integers

function sumTwoSmallestNumbers(numbers) {
	let [a, b] = numbers.sort((a, b) => a - b)
	return a + b
}
