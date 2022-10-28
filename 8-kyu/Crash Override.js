// Crash Override

const firstLetter = str => str[0].toUpperCase()

const isValidName = name => /[a-z]/gi.test(name)

const aliasGen = (fName, sName) =>
	isValidName(fName[0]) && isValidName(sName[0])
		? `${fName[firstLetter(fName)]} ${surname[firstLetter(sName)]}`
		: 'Your name must start with a letter from A - Z.'
