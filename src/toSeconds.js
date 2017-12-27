const multipliers = {
	s: 1,
	m: 60,
	h: 3600,
}

const getMultiplier = unit => multipliers[unit.toLowerCase()]

const convert = val => {
	const num = Number(val.slice(0, -1))
	const multiplier = getMultiplier(val.slice(-1))
	return num * multiplier
}

const sum = (a, b) => a + b

module.exports = hms => hms.map(convert).reduce(sum, 0)
