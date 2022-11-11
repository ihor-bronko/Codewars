// Find the next perfect square!
function findNextSquare(sq) {
	if (Math.sqrt(sq) % 1) return -1
	return (Math.sqrt(sq) + 1) ** 2
}
