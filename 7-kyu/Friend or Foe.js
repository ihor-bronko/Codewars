// Friend or Foe?

function friend(friends) {
	let result = []
	for (let i = 0; i < friends.length; i++) {
		if (friends[i].length === 4) result.push(friends[i])
	}
	return result
}

console.log(friend(['Ryan', 'Kieran', 'Mark']))
console.log(friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man']))
console.log(
	friend(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool'])
)
console.log(friend(['Love', 'Your', 'Face', '1']))
