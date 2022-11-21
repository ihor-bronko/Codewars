// Find the middle element
function gimme(triplet) {
	if (
		(triplet[0] > triplet[1] && triplet[0] < triplet[2]) ||
		(triplet[0] > triplet[2] && triplet[0] < triplet[1])
	) {
		return 0
	}
	if (
		(triplet[1] > triplet[0] && triplet[1] < triplet[2]) ||
		(triplet[1] > triplet[2] && triplet[1] < triplet[0])
	) {
		return 1
	}
	return 2
}
