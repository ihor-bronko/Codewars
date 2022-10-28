// Simple Change Machine

function changeMe(moneyIn) {
	switch (moneyIn) {
		case '£5':
			return '20p '.repeat(25).trim()
		case '£2':
			return '20p '.repeat(10).trim()
		case '£1':
			return '20p '.repeat(5).trim()
		case '50p':
			return '20p 20p 10p'
		case '20p':
			return '10p 10p'
		default:
			return moneyIn
	}
}
