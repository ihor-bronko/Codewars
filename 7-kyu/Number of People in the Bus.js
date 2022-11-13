// Number of People in the Bus
const number = busStops => {
	let result = 0
	for (let i = 0; i < busStops.length; i++) {
		result += busStops[i][0] - busStops[i][1]
	}
	return result
}
