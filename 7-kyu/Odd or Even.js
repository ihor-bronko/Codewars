// Odd or Even
const oddOrEven = array =>
	array.reduce((cur, prev) => cur + prev, 0) % 2 ? 'odd' : 'even'
