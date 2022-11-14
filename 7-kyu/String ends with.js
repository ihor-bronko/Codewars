// String ends with?
function solution(str, ending) {
	if (typeof str != 'string' || typeof ending != 'string') {
		return false
	} else if (str === '' || ending === '') {
		return true
	} else {
		let result
		for (let i = ending.length; i > 0; i--) {
			if (str[str.length - i] === ending[ending.length - i]) {
				result = true
			} else {
				result = false
				break
			}
		}
		return result
	}
}

console.log(solution('abcde', 'cde'))
console.log(solution('abcde', 'abc'))
