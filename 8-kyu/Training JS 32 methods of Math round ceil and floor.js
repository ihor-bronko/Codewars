// Training JS #32: methods of Math---round() ceil() and floor()

const roundIt = n =>
	(difference => difference < 0 ? Math.ceil(n) : difference > 0 ? Math.floor(n) : Math.round(n))
	(String(n).split('.').reduce((prev,curr) => prev.length - curr.length))




