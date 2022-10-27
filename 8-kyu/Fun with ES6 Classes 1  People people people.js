// Fun with ES6 Classes #1 - People, people, people

class Person {
	constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
		Object.assign(this, { firstName, lastName, age, gender });
	}
	sayFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
	static greetExtraTerrestrials(raceName) {
		return `Welcome to Planet Earth ${raceName}`;
	}
}



