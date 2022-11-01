// Be Concise II - I Need Squares

const squaresOnly = array =>
	array.filter(num => Number.isInteger(Math.sqrt(num)))
