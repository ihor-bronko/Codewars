// Training JS #9: loop statement --while and do..while

function padIt(str,n){
	while (n > 0){
	if (n % 2) {
		str = '*' +str
	} else {
		str = str + '*'
	}
	n--
	}
	return str
}


console.log(padIt("a",1));
console.log(padIt("a",2));
console.log(padIt("a",3));
console.log(padIt("a",4));
console.log(padIt("a",5));