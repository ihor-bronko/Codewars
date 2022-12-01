// Anagram Detection

const isAnagram = (test, original) =>
	[...test.toLowerCase()].sort().join() ===
	[...original.toLowerCase()].sort().join()
