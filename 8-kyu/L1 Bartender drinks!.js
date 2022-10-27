// L1: Bartender, drinks!


function getDrinkByProfession(param){
	let lowStr=param.toLowerCase()
	let answer={
		'jabroni': 'Patron Tequila',
		'school counselor' : 'Anything with Alcohol',
		'programmer' : 'Hipster Craft Beer',
		'bike gang member' : 'Moonshine',
		'politician':'Your tax dollars',
		'rapper': 'Cristal'
	}
	if(lowStr in answer) return answer[lowStr]
	else return 'Beer'
}


