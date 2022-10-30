// Training JS #21: Methods of String object--trim() and the string template

const fiveLine = s => {
	const space = s.trim()
	let result = ''

	for (let i = 1; i <= 5; i++) {
		if (i === 5) {
			result += `${space.repeat(i)}`
			break
		}
		result += `${space.repeat(i)}\n`
	}
	return result
}
