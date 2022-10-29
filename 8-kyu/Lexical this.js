// Lexical this

const Person = function () {
	const person = {
		_name: 'Leroy',
		_friends: [],
		fillFriends(f) {
			this._friends.push(...f)
		}
	}
	return person
}
