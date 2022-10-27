// Is it a palindrome

const isPalindrome = x => x.toLowerCase() === x.split('').reverse().join('').toLowerCase()





console.log(isPalindrome("a"))
console.log(isPalindrome("aba"))
console.log(isPalindrome("Abba"))
console.log((isPalindrome("hello")))
console.log(isPalindrome("Bob"))

console.log((isPalindrome("Madam")))
console.log((isPalindrome("AbBa")))