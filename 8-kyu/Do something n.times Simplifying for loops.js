// Do something "n.times" (Simplifying "for" loops)

Number.prototype.times = f => {
	for (let i = 0; i < this; i++) {
		f(i)
	}
}
