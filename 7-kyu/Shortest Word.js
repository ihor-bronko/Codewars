// Shortest Word

const findShort = s =>
	Math.min.apply(
		this,
		s.split(' ').map(element => element.length)
	)
