// Implement Array.prototype.filter()

Array.prototype.filter = function (func) {
	let result = []
	
	for (let i = 0; i < this.length; i++) {
		if(func(this[i])) {
			result.push(this[i])
		}
	}
	return result
}





