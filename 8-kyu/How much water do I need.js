// How much water do I need?



const howMuchWater  = (water, load, clothes) => clothes < load ? 'Not enough clothes' :  clothes > 2 * load ? 'Too much clothes': +(water * 1.1 ** (clothes - load)).toFixed(2)

