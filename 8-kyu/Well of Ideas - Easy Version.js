// Well of Ideas - Easy Version
//
// For every good kata idea there seem to be quite a few bad ones!
//
// 	In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.


function well(x) {
	let goodIdeaCount = 0
	for (const idea of x) {
		if (idea === 'good') goodIdeaCount += 1
	}
	if (goodIdeaCount > 2) return 'I smell a series!'
	if (goodIdeaCount > 0) return 'Publish!'
	return 'Fail!'
}