// Nth Smallest Element (Array Series #4)

const nthSmallest = (arr, pos) => arr.sort((a, b) => a - b)[pos - 1]
