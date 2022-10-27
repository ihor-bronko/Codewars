// Pre-FizzBuzz Workout #1

function preFizz(n) {
let output = new Array()
	let num = 1
	
	while (output.length < n) {
	output.push(num)
		num += 1
	}
	return output
}

