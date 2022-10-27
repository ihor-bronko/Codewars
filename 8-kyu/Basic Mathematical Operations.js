// Basic Mathematical Operations
// Your task is to create a function that does four basic mathematical operations.
// 	The function should take three arguments - operation(string/char), value1(number), value2(number).
// 	The function should return result of numbers after applying the chosen operation.
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7


const basicOp = (operation, value1, value2) => eval(value1 + operation + value2)



