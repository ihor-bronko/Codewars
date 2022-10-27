// Smallest unused ID

const nextId = ids => ids.sort((a,b) => a - b).reduce((prev, curr) => prev + (prev === curr ), 0)


