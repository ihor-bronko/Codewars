// Determine if the poker hand is flush

const isFlush = cards => cards.every(a => cards[0].slice(-1) === a.slice(-1))
