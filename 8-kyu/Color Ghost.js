// Color Ghost

class Ghost {
	constructor() {
		this.colors = ['white', 'yellow', 'purple', 'red']
	}
	
	get color() {
		const randomPosition = Math.trunc(Math.random() * this.colors.length)
		return this.colors[randomPosition]
	}
}