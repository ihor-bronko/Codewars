// List of Presents

function howManyGifts(maxBudget, gifts) {
	gifts.sort((a, b) => a - b)
	let sum = 0
	let i = 0
	while (maxBudget >= sum) {
		sum += gifts[i]
		i++
	}
	return i - 1
}
