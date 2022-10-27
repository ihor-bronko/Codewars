// Training JS #10: loop statement --for

function pickIt(arr){
 let odd=[],even=[];
 for (elem of arr) {
	 (elem % 2 ? odd : even).push(elem)
	}
	
	return [odd,even];
}

