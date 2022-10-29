// Barking mad

function Dog(breed) {
	this.breed = breed
}

const snoopy = new Dog('Beagle')

snoopy.bark = function () {
	return 'Woof'
}

const scoobydoo = new Dog('Great Dane')

scoobydoo.bark = function () {
	return 'Woof'
}
