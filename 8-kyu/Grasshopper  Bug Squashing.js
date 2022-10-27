// Grasshopper - Bug Squashing


let health = 100
let position = 0
let coins = 0

const main = () =>
	[rollDice, move, combat, getCoins, buyHealth, printStatus].forEach(action =>
		action()
	)