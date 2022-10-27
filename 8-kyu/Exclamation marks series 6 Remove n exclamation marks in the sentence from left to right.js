// Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right

const remove = (s,n) => n > 0 ? remove(s.replace('!', ''), n - 1 ) : s



