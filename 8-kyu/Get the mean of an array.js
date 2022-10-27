// Get the mean of an array


const getAverage = marks => Math.floor(marks.reduce((prev, curr) => prev + curr) / marks.length)

