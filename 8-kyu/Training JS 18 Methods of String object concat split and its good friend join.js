// Training JS #18: Methods of String object--concat() split() and its good friend join()

const splitAndMerge = (string, separator)=> string.split(' ').map(element => element.split('').join(separator)).join(' ')


