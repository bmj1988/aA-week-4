/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will takes
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/

function countCharacters(string) {
	let obj = {}
	let split = string.split('');
	for (let i = 0; i < split.length; i++) {
		const char = split[i]
		if (obj[char] === undefined) {
			obj[char] = 1
		}
		else obj[char] += 1

	}
	return obj
}

function duplicateCharMinCount(string, minCount) {
	const arr = []
	let obj = countCharacters(string)
	for (let key in obj) {
		if (obj[key] >= minCount) {
			arr.push(key)
		}
	}
	return arr;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
