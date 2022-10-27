// Is the date today

function isToday(date) {
	return new Date().toDateString() === date.toDateString()
}