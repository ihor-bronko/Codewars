// Collatz Conjecture (3n+1)

const hotpo = n => n < 2 ? 0 : hotpo(n % 2 ? 3 * n + 1 : n / 2) + 1

