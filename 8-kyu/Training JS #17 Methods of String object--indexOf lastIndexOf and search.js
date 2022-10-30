// Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()

function firstToLast(str, c) {
	let first = str.indexOf(c),
		last = str.lastIndexOf(c)
	let lenght = last - first

	return str.includes(c) ? lenght : str.lastIndexOf(c)
}
