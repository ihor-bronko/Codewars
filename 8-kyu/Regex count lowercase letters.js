// Regex count lowercase letters


function indexOf(string, character) {
	let index = 0
	while(index < string.length) {
		if (string[index] === character) {
			return index
		}
		index++
	}
	return -1
}

function lowercaseCount(str){
	let result = 0,
		string = 'abcdefghijklmnopqrstuvwxyz'
	for (let index = 0; index < str.length; index++) {
		let character = str[index]
		if (indexOf(string,character) >= 0) {
			result++
		}
	}
	return result
}


