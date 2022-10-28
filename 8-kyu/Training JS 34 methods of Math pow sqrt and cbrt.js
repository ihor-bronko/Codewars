// Training JS #34: methods of Math---pow() sqrt() and cbrt()

const cutCube = (volume, n) =>
	!(Math.cbrt(n) % 1) && !(Math.cbrt(volume / n) % 1)
