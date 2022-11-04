// Looking for a benefactor

function newAvg(arr, navg) {
	const x = navg * (arr.length + 1) - arr.reduce((a, b) => a + b, 0)
	if (x <= 0) throw 'Expected New Average is too low'
	return Math.ceil(x)
}
