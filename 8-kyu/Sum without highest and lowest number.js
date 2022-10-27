// Sum without highest and lowest number
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6


const sumArray = array => array ? array.sort((a,b) => a - b ).slice(1, - 1).reduce((x,y)=> x + y, 0) : 0
	


