// Maximum Length Difference
const mxdiflg = (a1, a2) =>
	a1.reduce(
		(prev, curr) =>
			Math.max(
				prev,
				a2.reduce(
					(prev2, curr2) =>
						Math.max(prev2, Math.abs(curr.length - curr2.length)),
					-1
				)
			),
		-1
	)
