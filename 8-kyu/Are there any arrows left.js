// Are there any arrows left?

function anyArrows(arrows) {
	// arrow it
	return arrows.some(element => !element.damaged)
}
