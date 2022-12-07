// Simple Fun #176: Reverse Letter
const reverseLetter = str => [...str.replace(/[^a-z]/gi, '')].reverse().join('')
