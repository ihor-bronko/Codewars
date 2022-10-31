// Training JS #13: Number object and its properties

function whatNumberIsIt(n) {
	return n === 1 / 0
		? 'Input number is Number.POSITIVE_INFINITY'
		: n === 100
		? 'Input number is 100'
		: n === 1.7976931348623157e308
		? 'Input number is Number.MAX_VALUE'
		: n === 5e-324
		? 'Input number is Number.MIN_VALUE'
		: n === -Number.MAX_VALUE * 2
		? 'Input number is Number.NEGATIVE_INFINITY'
		: n === Infinity + 1
		? 'Input number is Number.POSITIVE_INFINITY'
		: n === -Infinity
		? 'Input number is Number.POSITIVE_INFINITY'
		: isNaN(n)
		? 'Input number is Number.NaN'
		: 'Input number is ' + n
}
