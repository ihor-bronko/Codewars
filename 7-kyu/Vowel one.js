// Vowel one

const vowelOne = s => s.replace(/./g, a => (/[aeiou]/i.test(a) ? '1' : 0))
