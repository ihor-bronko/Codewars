// Training JS #16: Methods of String object--slice(), substring() and substr()

const cutIt = arr => {
	const minLength = Math.min(...arr.map(str => str.length))
	return arr.map(str => str.slice(0, minLength))
}
