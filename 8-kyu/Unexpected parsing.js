// Unexpected parsing

function getStatus(isBusy) {
	let msg = isBusy ? 'busy' : 'available'
	return {
		status: msg
	}
}
