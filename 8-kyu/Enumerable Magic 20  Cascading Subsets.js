// Enumerable Magic #20 - Cascading Subsets



const eachCons = (array, n) => array.map((x,y) => array.slice(y,y +n)).filter(x => x.length === n)
