// fibonachi

const fibonachi = count => {
	let fib = []
	for (let i = 0; i < count; i++) {
		if (i === 0) fib[i] = 1
		else if (i === 1) fib[i] = 2
		else fib[i] = fib[i - 2] + fib[i - 1]
	}
	return fib
}

let f = fibonachi(5)
console.log(f)

