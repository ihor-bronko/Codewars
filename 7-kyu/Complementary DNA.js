// Complementary DNA

function DNAStrand(dna) {
	let obj = { A: 'T', T: 'A', C: 'G', G: 'C' }

	return dna.replace(/./g, e => obj[e])
}
