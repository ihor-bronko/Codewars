// Pole Vault Starting Marks

const startingMark = (bodyHeight) => {
	const m = (10.67 - 9.45) / (1.83 - 1.52)
	return Math.round((m * bodyHeight + 10.67 - m * 1.83)* 100) / 100
}

