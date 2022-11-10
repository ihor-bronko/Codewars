// Two to One

const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('')

console.log(longest('aretheyhere', 'yestheyarehere'))
console.log(longest('loopingisfunbutdangerous', 'lessdangerousthancoding'))
console.log(longest('inmanylanguages', 'theresapairoffunctions'))
