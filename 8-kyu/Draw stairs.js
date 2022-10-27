// Draw stairs


const drawStairs = n => [...Array(n)].map((_,index) => ' '.repeat(index) + 'I').join('\n')

