// 'x' marks the spot.

const xMarksTheSpot = input => {
	let count = 0
	let x = 0
	let y = 0
	input.map((a, b) => {
		if (a.includes('x')) {
			a.map((x, b) => (x === 'x' ? (y = b) : a))
			count++
			x = b
		} else return a
	})
	return count === 0 ? [] : count > 1 ? [] : [x, y]
}
