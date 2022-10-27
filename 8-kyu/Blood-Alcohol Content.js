// Blood-Alcohol Content

function bloodAlcoholContent(drinks, weight, sex, time){
	let r = 0
	
	if (sex === 'male') {
	r = 0.73
	} else {
		r = 0.66
	}
	let bac = (drinks.ounces * drinks.abv * 5.14 / weight * r) - .015 * time
	return bac.toFixed(4)
}
