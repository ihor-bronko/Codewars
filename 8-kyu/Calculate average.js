// Calculate average
//
// Write a function which calculates the average of the numbers in a given list.
//
// 	Note: Empty arrays should return 0.




const findAverage = array => array.length == 0 ? 0 : array.reduce((prev, cur) => prev + cur) / array.length

