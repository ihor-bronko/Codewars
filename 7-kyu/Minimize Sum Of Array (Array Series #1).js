// Minimize Sum Of Array (Array Series #1)

function minSum(arr) {
	const arrSorted = arr.sort((a, b) => a - b)

	let sum = 0

	for (let i = 0; i < arr.length / 2; i++) {
		sum += arrSorted[i] * arrSorted[arrSorted.length - 1 - i]
	}
	return sum
}
