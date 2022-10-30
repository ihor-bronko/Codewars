// Training JS #29: methods of arrayObject---concat() and join()

const bigToSmall = arr => {
	return []
		.concat(...arr)
		.sort((a, b) => b - a)
		.join('>')
}
