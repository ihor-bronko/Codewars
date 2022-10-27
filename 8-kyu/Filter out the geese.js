// Filter out the geese


function gooseFilter (birds) {
	const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
	return birds.filter(x => !geese.includes(x))
}



	// ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]

