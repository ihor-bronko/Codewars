// Filter Coffee

const search = (budget, prices) =>
	prices.sort((a, b) => a - b).filter(v => v <= budget) + ''
