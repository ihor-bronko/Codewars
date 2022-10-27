// Switch it Up


function switchItUp(number){
 return number === 1 ? "One"
	 : number === 2 ? "Two"
	 : number === 3 ? "Three"
		 : number === 4 ? "Four"
		 : number === 5 ? "Five"
			 : number === 6 ? "Six"
					 : number === 7 ? "Seven"
					 : number === 8 ? "Eight"
							 : number === 9 ? "Nine"
							 : number === 0 ? "Zero"
						 : null
}

const switchItUp = number => ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][number]






console.log(switchItUp(1));
console.log(switchItUp(3));
console.log(switchItUp(5));