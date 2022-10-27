// Switch/Case - Bug Fixing #6



function evalObject(value) {
	let result = 0
	switch (value.operation) {
		case'+':
			return value.a + value.b;
		case'-':
			return value.a - value.b;
		case'/':
			return value.a / value.b;
		case'*':
			return value.a * value.b;
		case'%':
			return value.a % value.b;
		case'^':
			return Math.pow(value.a, value.b);
	}
	return result
}