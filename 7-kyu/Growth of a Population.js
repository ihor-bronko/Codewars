// Growth of a Population

const nbYear = (p0, percent, aug, p) =>
	p0 < p
		? 1 + nbYear((p0 + (p0 * percent) / 100 + aug) | 0, percent, aug, p)
		: 0

console.log(nbYear(1500, 5, 100, 5000))
console.log(nbYear(1500000, 2.5, 10000, 2000000))
console.log(nbYear(1500000, 0.25, 1000, 2000000))
