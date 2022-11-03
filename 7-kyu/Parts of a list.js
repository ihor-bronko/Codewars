// Parts of a list

const partlist = arr =>
	arr
		.map((a, b) => [arr.slice(0, b).join(' '), arr.slice(b).join(' ')])
		.slice(1)
