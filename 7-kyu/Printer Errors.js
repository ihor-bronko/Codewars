// Printer Errors

function printerError(s) {
	let result = 0
	for (let sKey in s) {
		if (s[sKey] > 'm') result++
	}
	return result + '/' + s.length
}
