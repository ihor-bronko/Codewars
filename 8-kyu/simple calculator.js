// simple calculator

const calculator = (a,b,sign) =>
typeof a === "number"
	&& typeof  b === "number"
	&& ['+','-','*','/'].includes(sign) ? sign === '+' ? a + b : sign === '-' ? a - b : sign === '*' ? a * b :  a / b : 'unknow value'


