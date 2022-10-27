// Return the day


function whatday(num) {
	if(num === 1) return 'Sunday'
	if(num === 2) return 'Monday'
	if(num === 3) return 'Tuesday'
	if(num === 4) return "Wednesday"
	if(num === 5) return "Thursday"
	if(num === 6) return "Friday"
	if(num === 7) return "Saturday"
	else {
		return 'Wrong, please enter a number between 1 and 7'
	}
}

