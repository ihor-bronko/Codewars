// Remove the minimum
function removeSmallest(numbers) {
	let result = [],
		length = numbers.length,
		array = [...numbers],
		count = 0

	for (let i = 0; i < length - 1; i++) {
		for (let j = i + 1; j < length; j++) {
			if (array[i] > array[j]) {
				;[array[i], array[j]] = [array[j], [array[i]]]
			}
		}
	}

	for (let i = 0; i < length; i++) {
		if (numbers[i] === array[0]) {
			break
		}
		count++
	}
	for (let i = 0; i < length; i++) {
		if (i !== count) {
			result.push(numbers[i])
		}
	}
	return result
}
