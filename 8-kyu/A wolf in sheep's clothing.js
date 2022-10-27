// A wolf in sheep's clothing

function warnTheSheep(queue) {
	const reversed = queue.reverse()
	const index = reversed.indexOf('wolf')
	if (index === 0) return 'Pls go away and stop eating my sheep'
	return `Oi! Sheep number ${index}! You are about to be eaten by a wolf!`
}