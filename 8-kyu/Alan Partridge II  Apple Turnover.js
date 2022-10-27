// Alan Partridge II - Apple Turnover

function apple(x) {
	let xToNumber;
	if (typeof x === "string") xToNumber = Number(x);
	if (Math.pow(xToNumber, 2) > 1000 || Math.pow(x, 2) > 1000)
		return "It's hotter than the sun!!";
	else return "Help yourself to a honeycomb Yorkie for the glovebox.";
}
